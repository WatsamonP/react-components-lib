import React from 'react'
import styled from 'styled-components'
import { translate } from 'react-i18next';
import { connect } from 'react-redux'
import moment from 'moment'
import { deleteApp } from '../../actions'
import { Background } from '../../components/Alert'
import { JoyTheme } from '../../Style/JoyTheme'
import { ButtonComponent } from 'react-components-lib'
import ButtonStyle from '../../Style/ButtonStyle'
import { Trash } from '../../components/Icon'

const Container = styled.div`
  z-index: 300; /* Sit on top */
  position: fixed;
  top: 20%; 
  left: 30%; 
  right: 30%; 
  bottom: 40%;
  box-shadow: 0px 0px 10px 0px #474444;
  overflow-y: auto;
  background-color: ${JoyTheme.LIGHT};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Head = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${JoyTheme.RED};
  text-align: center;
`

const Button = styled(ButtonComponent)`
  ${ButtonStyle}
  display: inline-block;
  min-width: calc(45%);
  color: ${JoyTheme.WHITE};
  background-color: ${props => props.color ? props.color : ''};
`

const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
`


class AlertDelete extends React.Component {
  render() {
    const { i18n, onClose, value, data } = this.props;
    const currentApp = data[value];

    return (
      <div>
        <Background onClick={() => onClose()} />
        <Container>
          <Head>{i18n.t('alert-delete')}</Head>
          <div style={{ textAlign: 'center' }}>
            <p>
              {value} ( {moment(currentApp.date).format('D/MM/YYYY')} )
          </p>
            <p style={{ fontWeight: 'bold' }}>
              {currentApp.firstName.value} {currentApp.lastName.value}
            </p>
          </div>
          <WrapBtn>
            <Button
              color={JoyTheme.MID_GREY}
              label={i18n.t('cancel')}
              onClick={() => onClose()}
            />
            <Button
              label={i18n.t('delete')}
              color={JoyTheme.RED2}
              rightIcon={Trash} rightIconStyle={{ paddingLeft: '10px' }}
              onClick={() => this.props.deleteApp(value)}
            />
          </WrapBtn>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => ({ data })

const mapDispatchToProps = (dispatch) => {
  return {
    deleteApp: (appId) => dispatch(deleteApp(appId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(translate()(AlertDelete))