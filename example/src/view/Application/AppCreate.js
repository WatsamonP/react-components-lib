import React from 'react';
import _ from 'lodash'
import * as R from 'ramda'
import { connect } from 'react-redux';
import { createApp } from '../../actions'
import { translate } from 'react-i18next';
import SelectComponents from './config/SelectComponents'
import createAppField from './config/field/createApp'

// style
import { Title, Container } from '../../components/Wrapper'
import Footer from '../Form/Footer'
import Alert from '../../components/Alert'
import { NavyBtn, NavyOutlineBtn } from '../../components/Button'
import { Form, ItemWrapper } from '../../components/Layout'

const FloppyIcon = (<i className="fa fa-floppy-o" aria-hidden="true"></i>)
const ClearIcon = (<i className="fa fa-trash" aria-hidden="true"></i>)


class AppCreate extends React.Component {
  state = {
    ...createAppField,
    status: {
      isSuccess: false,
      isCompleted: false,
      isOpen: false,
      isDisabled: false
    }
  }

  setError = (key) => {
    this.setState({ [key]: { ...this.state[key], error: true } })
    return true;
  }

  handleTextInput = key => e => {
    let value = e.target.value;
    let isError = this.state[key].required ? R.isEmpty(value) ? true : false : false;
    this.setState({
      [key]: { ...this.state[key], value: value, error: isError },
      status: isError
    })
  }

  handleRadio = key => code => {
    this.setState({ [key]: { ...this.state[key], value: code, error: false } })
  }

  /************************************************************************* */

  handleSave = async () => {
    const newState = _.omit(this.state, ['blank', 'status']);

    let isError = await Object.keys(newState).map(key => {
      return this.state[key].required ?
        (R.isEmpty(this.state[key].value) || R.isNil(this.state[key].value)) ?
          this.setError(key)
          : false
        : false
    })

    if (!R.includes(true, isError)) {
      this.setState({
        status: { ...this.state.status, isDisabled: false, isOpen: !this.state.isOpen }
      })
    } else {
      this.setState({ status: { isDisabled: true } })
    }
  }

  handleClear = (e) => {
    e.preventDefault();
    const newState = _.omit(this.state, ['blank', 'status']);

    Object.keys(newState).map(key => {
      return this.setState({ [key]: { ...this.state[key], value: null } })
    })
  }

  handleOnSubmit = () => {
    const { gender, firstName, lastName } = this.state;
    const newState = {
      gender: { value: gender.value },
      firstName: { value: firstName.value },
      lastName: { value: lastName.value }
    }

    let formValue = { ...newState, date: new Date().getTime() };
    const appId = `${new Date().getTime()}`;
    this.props.createApp(appId, formValue)
  }

  /************************************************************************* */

  renderField = () => {
    const newState = _.omit(this.state, ['status']);
    return Object.keys(newState).map((key, index) => {
      return (
        <div key={`key-${key}-${index}`} className={this.state[key].className}>
          <ItemWrapper>
            <SelectComponents
              key={`key-${key}-${index}`}
              field={this.state[key]}
              // handleFunction
              handleTextInput={this.handleTextInput(key)}
              handleRadio={this.handleRadio(key)}
            />
          </ItemWrapper>
        </div >
      )
    })
  }



  render() {
    const newState = _.omit(this.state, ['blank', 'status']);
    const { i18n } = this.props

    return (
      <div>

        {this.state.status.isOpen &&
          <Alert
            title={i18n.t('create-app-check')}
            value={newState}
            open={this.state.status.isOpen}
            onClose={() => this.setState({ status: { isOpen: false } })}
            onSubmit={this.handleOnSubmit}
            action='create'
          />
        }

        <Title><div className="left">{i18n.t('create-app')}</div></Title>

        <Container>

          <Form>
            {this.renderField()}
          </Form>

          <div style={{ paddingTop: '60px', float: 'right' }}>
            <NavyOutlineBtn
              onClick={this.handleClear} label={i18n.t('clear')}
              leftIcon={ClearIcon} leftIconStyle={{ paddingRight: '10px' }}
            />
          </div>
        </Container>

        <Footer
          right={
            <NavyBtn
              onClick={this.handleSave} label={i18n.t('save')}
              leftIcon={FloppyIcon} leftIconStyle={{ paddingRight: '10px' }}
              disabled={this.state.status.isDisabled} />
          }
          rightStyle={{ paddingTop: '6px', paddingRight: '5px' }}

        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createApp: (appId, formValue) => { dispatch(createApp(appId, formValue)) },
  }
}

export default connect(null, mapDispatchToProps)(translate()(AppCreate));

