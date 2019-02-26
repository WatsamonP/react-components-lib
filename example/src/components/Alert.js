import React from 'react'
import styled from 'styled-components'
import CardStyle from '../Style/CardStyle'
import { translate } from 'react-i18next';
import CreateTable from './CreateTable'
import SummaryTable from './SumTable'
import { SubmitBtn } from './Button'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000000a3;
  z-index: 299;
`

const Card = styled.div`
  ${CardStyle};
  z-index: 300; /* Sit on top */
  position: fixed;
  top: 20%;
  left: 15%;
  right: 15%;
  bottom: 20%;
  margin: auto;
  box-shadow: 0px 0px 10px 0px #474444;
  overflow-y: auto;
  .header {
    font-size: 28px;
  }
  ${props => props.config};
`

const DisplayBtn = styled.div`
  position: absolute;
  right: 0;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-top: 20px;
`

const renderCreateTable = (value, onSubmit, i18n) => {
  return (
    <div>
      <CreateTable list={value} />
      <div className="footer">
        <SubmitBtn label={i18n.t('submit')} onClick={onSubmit} />
      </div>
    </div>
  )
}

const renderSummaryTable = (value, onSubmit, i18n) => {
  return (
    <div>
      <SummaryTable list={value} />
      <DisplayBtn >
        <SubmitBtn label={i18n.t('submit')} onClick={onSubmit} />
      </DisplayBtn>
    </div>
  )
}

const justAlert = (value) => {

}

const Alert = ({ title, value, optional, onClose, open, onSubmit = () => null, action = 'alert', i18n }) => {
  const MiniCard = { top: '25%', bottom: '25%', left: '30%', right: '30%' }
  const renderAlert = action === 'alert' ?
    justAlert(value)
    : action === 'create' ?
      renderCreateTable(value, onSubmit, i18n)
      : renderSummaryTable(value, onSubmit, i18n);

  return (open ? (
    <div>
      <Background onClick={() => onClose()} />
      <Card config={action === 'create' && MiniCard}>
        <div className="header">
          {title}
          <div className="closeBtn" onClick={() => onClose()}>x</div>
        </div>
        <div className="optional">{optional}</div>
        <div className="line"></div>
        <div className="container">
          {renderAlert}
        </div>
      </Card>
    </div>
  ) : null)
}

export default translate()(Alert)