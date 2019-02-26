import React from 'react';
import * as R from 'ramda'
import _ from 'lodash'
import { connect } from 'react-redux';
import { setValue, removeValue } from '../../actions'
import { translate } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import SelectComponents from './config/SelectComponents'

import editApp from './config/field/editApp' // field

// style
import Alert from '../../components/Alert'
import Footer from '../Form/Footer'
import { Title, Container } from '../../components/Wrapper'
import { Form, ItemWrapper, Line } from '../../components/Layout'
import { getGenderIcon } from './List'
import { JoyTheme } from '../../Style/JoyTheme';
import { SubmitBtn } from '../../components/Button'
import Loading from '../../components/Loading'
const checkCircle = <i className="fa fa-check-circle" aria-hidden="true"></i>


class AppEdit extends React.Component {

  state = { status: { isOpen: false }, ...editApp }

  getLabel = (options, code) => (_.find(options, ['code', code]))

  /****************************************************************************** */

  handleTextInput = key => e => {
    let value = e.target.value;
    let isError = this.state[key].required ? R.isEmpty(value) ? true : false : false;
    this.setState({
      [key]: { ...this.state[key], value: value, error: isError },
      status: isError
    })
    this.props.setValue(this.props.appId, key, value)
  }

  handlePopupSearch = key => object => {
    this.setState({ [key]: { ...this.state[key], value: object } })
    this.props.setValue(this.props.appId, key, object)
  }

  handleDropdown = key => object => {
    const { identityNo, otherIdentityResources } = this.state;
    const { code } = object;
    const identityMask = {
      ...identityNo,
      placeholder: 'X XXXXX XXXX XX X',
      mask: "9 99999 9999 99 9",
      maskChar: " "
    };
    const other = _.omit({ ...identityNo, placeholder: 'อะไรก็ได้' }, ['mask', 'maskChar']);

    const isOtherIden = code === '7';
    let res = (code === '11' || code === '12') ? identityMask : other;

    this.props.setValue(this.props.appId, key, object)
    this.props.setValue(this.props.appId, 'identityNo', "");
    if (otherIdentityResources) {
      this.props.removeValue(this.props.appId, 'otherIdentityResources')
    }

    this.setState({
      identityNo: { ...res },
      otherIdentityResources: {
        ...otherIdentityResources,
        hidden: !isOtherIden
      }
    })

  }

  handleRadio = key => code => {
    const { weightQuestionDetail } = this.state;
    const isHidden = code === 'S' ? true : false
    this.setState({
      weightQuestionDetail: { ...weightQuestionDetail, hidden: isHidden },
      [key]: { ...this.state[key], value: code }
    })

    if (isHidden) {
      this.props.removeValue(this.props.appId, 'weightQuestionDetail')
    }
    this.props.setValue(this.props.appId, key, this.getLabel(this.state[key].options, code))
  }

  handleCheckbox = (key) => (item, isChecked) => {
    const { options } = this.state[key];
    const PropsValue = this.props.data[key];
    const PropsList = this.props.data[`${key}Detail`];
    let list = [], value = {};
    if (PropsValue) { value = PropsValue.value }
    if (PropsList) { list = PropsList.value.list }

    let checkKey = isChecked ? true : false;
    let isAlready = this.getLabel(list, item.code) ? true : false;

    this.props.setValue(this.props.appId, key, { ...value, [item.code]: checkKey, none: false })

    const newList = _.compact([...list, isAlready ? null : this.getLabel(options, item.code)])
    this.props.setValue(this.props.appId, [`${key}Detail`], { list: newList })
  }

  handleCheckedNone = (key) => (isChecked) => {
    const checkKey = isChecked ? 'N' : false;

    this.props.setValue(this.props.appId, key, { none: checkKey })
  }

  handleDatePicker = key => res => {
    console.log(res)
    this.setState({ [key]: { ...this.state[key], value: res } })
    this.props.setValue(this.props.appId, key, res)
  }

  /************************************************************************* */

  handleOnSubmit = () => {
    this.setState({ status: { isOpen: !this.state.status.isOpen } })
  }

  handleAlertSubmit = () => {
    this.setState({ status: { isConfirmAlert: !this.state.status.isConfirmAlert } })
  }

  /************************************************************************* */
  renderField = (fields) => {
    const { data } = this.props;

    return Object.keys(fields).map((key, index) => {
      let newValue = !R.isNil(data[key]) ? data[key].value : fields[key].value;
      let isHidden = false;
      if (fields[key].hidden === true) {
        isHidden = !R.isNil(data[key]) ? false : true;
      }
      const field = { ...fields[key], fieldId: key, value: newValue, hidden: isHidden }

      return (
        <div key={`key-${key}-${index}`} className={field.className}>
          <ItemWrapper>
            <SelectComponents
              field={field}
              // handleFunction
              handleTextInput={this.handleTextInput(key)}
              handlePopupSearch={this.handlePopupSearch(key)}
              handleDropdown={this.handleDropdown(key)}
              handleCheckbox={this.handleCheckbox(key)}
              handleCheckedNone={this.handleCheckedNone(key)}
              handleRadio={this.handleRadio(key)}
              handleDatePicker={this.handleDatePicker(key)}
            />
          </ItemWrapper>
        </div >
      )
    })
  }

  render() {
    const { match, data, i18n } = this.props;

    if(!data){
      return <Redirect from="*" to="/404" />
    }

    const {
      firstName, lastName, birthDate, address,
      identityResources, otherIdentityResources, identityNo,
      weightQuestion, weightQuestionDetail,
      healthQues1, additional } = this.state; //Field

    const blank6 = { className: 'tablet-6 phone-6', hidden: true }
    const Group1 = { firstName, lastName, birthDate, address }
    const Group2 = { identityResources, otherIdentityResources, identityNo, blank6 }
    const Group3 = { weightQuestion, weightQuestionDetail }
    const Group4 = { healthQues1, additional }

    return (
      <div>
        {this.state.status.isConfirmAlert && <Loading />}

        {this.state.status.isOpen &&
          <Alert
            title={i18n.t('data-summary')}
            value={this.props.data}
            open={this.state.status.isOpen}
            onClose={() => this.setState({ status: { isOpen: false } })}
            onSubmit={this.handleAlertSubmit}
            action="sum"
          />
        }

        <Title>
          <div className="left">{i18n.t('app-id')} : {match.params.id}</div>
          <div className="right" style={{ fontSize: '25px' }}>{getGenderIcon(data.gender.value)}</div>
        </Title>

        <Container style={{ paddingBottom: '30px' }}>
          <Form>{this.renderField(Group1)}</Form>
          <Line />
          <Form>{this.renderField(Group2)}</Form>
          <Line />
          <Form>{this.renderField(Group3)}</Form>
          <Line />
          <Form>{this.renderField(Group4)}</Form>
        </Container>
        <Footer
          color={JoyTheme.LIGHT}
          right={
            <SubmitBtn
              onClick={this.handleOnSubmit}
              label={i18n.t('submit')}
              leftIcon={checkCircle} leftIconStyle={{ paddingRight: '10px' }}
              disabled={this.state.status.isDisabled} />}
          rightStyle={{ paddingTop: '6px', paddingRight: '5px' }}
        />
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { data: state.data[ownProps.match.params.id], appId: ownProps.match.params.id };
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (appId, fieldId, value) => { dispatch(setValue(appId, fieldId, value)) },
    removeValue: (appId, fieldId) => { dispatch(removeValue(appId, fieldId)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(translate()(AppEdit));