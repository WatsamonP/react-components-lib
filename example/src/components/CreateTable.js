import React from 'react';
import _ from 'lodash'
import * as R from 'ramda'
import styled from 'styled-components'
import { translate } from 'react-i18next';
import Responsive from '../Style/Responsive'
import { JoyTheme } from '../Style/JoyTheme'
import { getGenderIcon } from '../view/Application/List'
import { SelectAction } from './SumTable'

const Form = styled.div`
  ${Responsive('div')};
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`

const Label = styled.div`
  font-size: 18px;
  color: ${JoyTheme.NAVY};
  text-align:right;
  padding-left: 20px;
`

export const GenderToText = (code) => {
  return code === 'M' ?
    <React.Fragment>Male {getGenderIcon(code)}</React.Fragment>
    : <React.Fragment>Female {getGenderIcon(code)}</React.Fragment>
}

const DisplayValue = styled.div`
  font-size: 18px;
  margin-left: 20px;
`

export const getLabel = (options, value, lang = 'th') => {
  let getValue = _.find(options, ['code', value])
  return R.path([lang, 'label'], getValue.translations);
}

const CreateTable = ({ list = [], i18n }) => {
  const CurrentLanguage = i18n.language;

  return (
    <div>
      {Object.keys(list).map(key => {
        return (
          <Form key={`alert - key - ${key} `}>
            <Label className="tablet-5 phone-5">{i18n.t(list[key].label)}</Label>
            <DisplayValue className="tablet-5 phone-5">{SelectAction(list[key], CurrentLanguage)}</DisplayValue>
          </Form>
        )
      })}
    </div>
  )
}

export default translate()(CreateTable)