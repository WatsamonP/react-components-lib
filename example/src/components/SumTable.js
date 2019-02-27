import React from 'react';
import _ from 'lodash'
import * as R from 'ramda'
import styled from 'styled-components'
import moment from 'moment'
import { translate } from 'react-i18next';
import Responsive from '../Style/Responsive'
import { JoyTheme } from '../Style/JoyTheme'
import { getGenderIcon } from '../view/Application/List'

// icon
import {
  UserIcon,
  Calendar,
  MapMarker,
  Medkit,
  FileText,
  StickyNote,
  BalanceScale,
  Smile
} from '../components/Icon'

const Form = styled.div`
  ${Responsive('div')};
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  padding-bottom: 15px;
`
const Label = styled.div`
  font-size: 18px;
  color: ${JoyTheme.NAVY};
  text-align: left;
  padding-left: 30px;
`
const DisplayValue = styled.div`
  font-size: 18px;
  margin-left: 20px;
`

export const GenderToText = (code, i18n) => {
  return code === 'M' ?
    <React.Fragment>{i18n.t('Male')} {getGenderIcon(code)}</React.Fragment>
    : <React.Fragment>{i18n.t('Female')} {getGenderIcon(code)}</React.Fragment>
}

const renderLi = (objectValue, objectList, lang, i18n) => {
  if (!objectList) { return "-" }
  const { value } = objectValue;
  const list = objectList.value.list;

  if (value.none === 'N') {
    return (
      <React.Fragment>
        <span style={{ color: JoyTheme.SUCCESS, fontStyle: 'italic' }}>
          {i18n.t('health-wealth')} {Smile}
        </span>
      </React.Fragment>)
  }

  const trulyList = _.compact(Object.keys(value).map(key => (value[key] === true ? key : null)))
  let FinalList = _.filter(list, res => trulyList.includes(res.code));
  return (
    <div>
      {FinalList.map(item => <li key={`key-summary-table-li-${item.code}`}>{objectToLabel(item, lang)}</li>)}
    </div>
  )
}

const objectToLabel = (value, lang) => {
  if (R.isNil(value)) { return "" }
  return R.path([lang, 'label'], value.translations);
}

export const SelectAction = (value, lang, i18n) => {
  switch (typeof (value)) {
    case 'string':
      return value
    case 'object':
      switch (typeof (value.value)) {
        case 'number':
          return Moment(value.value, lang)
        case 'object':
          return objectToLabel(value.value, lang)
        case 'string':
          switch (value.value) {
            case "M":
            case "F":
              return GenderToText(value.value, i18n)
            default:
              return value.value
          }
        default:
          return ""
      }
    default:
      return null
  }
}

const RenderList = ({ icon, label, value, list, lang, optionalDisplay, specialDisplay, otherValue, i18n }) => {
  if (R.isEmpty(value) || R.isNil(value)) { return null }
  const sDisplay = (specialDisplay) => {
    return specialDisplay === 'li-list' ? renderLi(value, list, lang, i18n) : null
  }

  return (
    <Form>
      <Label className="tablet-4 phone-4">
        {icon} {label}
      </Label>
      <DisplayValue className="tablet-6 phone-6">
        {specialDisplay ? sDisplay(specialDisplay) : SelectAction(value, lang)}
        {otherValue && otherValue}
        {optionalDisplay && optionalDisplay}
      </DisplayValue>
    </Form>
  )
}

const Moment = (time, lang = 'th') => {
  moment.locale(lang)
  const newTime = moment(time).format('D MMMM');
  const year = lang === 'th' ? Number(moment(time).format('YYYY')) + 543 : moment(time).format('YYYY')
  return `${newTime} ${year}`;
}

const SummaryTable = ({ list = [], i18n }) => {
  const { firstName = {}, lastName = {}, birthDate = {}, address = {},
    identityResources = {}, otherIdentityResources = {}, identityNo = {},
    weightQuestion = {}, weightQuestionDetail = {},
    healthQues1 = {}, healthQues1Detail = {}, additional = {} } = list;
  const CurrentLanguage = i18n.language;
  const disPlaytherIdentityResources
    = otherIdentityResources.value ? ` (${otherIdentityResources.value})` : null


  const displayWeightQuestion = () => {
    if (_.isEmpty(weightQuestion)) { return null }
    return weightQuestion.value.code === 'S' ? ''
      : _.isEmpty(weightQuestionDetail.value) ? ''
        : ` ${weightQuestionDetail.value} ${i18n.t('kg')}`
  }
  const displayIden = () => {
    if (_.isNil(identityNo)) { return null }
    return (
      <React.Fragment>
        <div style={{ display: 'block' }}>
          <div style={{ color: JoyTheme.NAVY, display: 'inline-block', paddingRight: '20px' }}>
            {i18n.t('document-no')}
          </div>
          <div style={{ display: 'inline-block' }}>{R.defaultTo('', identityNo.value)}</div>
        </div>
      </React.Fragment>)
  }

  return (
    <div>
      <RenderList
        icon={UserIcon}
        label={i18n.t('fullName')}
        value={`${firstName.value} ${lastName.value}`} />
      <RenderList
        icon={Calendar}
        label={i18n.t('birthdate')}
        value={birthDate}
        lang={CurrentLanguage} />
      <RenderList
        icon={MapMarker}
        label={i18n.t('address')}
        value={address}
        lang={CurrentLanguage} />
      <RenderList
        icon={FileText}
        label={i18n.t('document-identify')}
        value={identityResources}
        otherValue={disPlaytherIdentityResources}
        lang={CurrentLanguage}
        optionalDisplay={displayIden()}
      />
      <RenderList
        icon={BalanceScale}
        label={i18n.t('weight')}
        value={weightQuestion}
        lang={CurrentLanguage}
        optionalDisplay={displayWeightQuestion()} />
      <RenderList
        icon={Medkit}
        label={i18n.t('healthQuestion1')}
        value={healthQues1}
        list={healthQues1Detail}
        lang={CurrentLanguage}
        specialDisplay={'li-list'}
        i18n={i18n} />
      <RenderList
        icon={StickyNote}
        label={i18n.t('additional')}
        value={additional} />
    </div>
  )
}

export default translate()(SummaryTable)