import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import * as R from 'ramda'
import { translate } from 'react-i18next';

import {
  TextInput,
  Dropdown,
  PopupSearch,
  Radio,
  Checkbox,
  DatePicker,
  Textarea
} from './LabelComponents'

// style
import withLabelStyle from '../../../Style/withLabelStyle'
import DropdownStyle from '../../../Style/DropdownStyle'
import PopupStyle from '../../../Style/PopupStyle'
import { Form, ItemWrapper } from '../../../components/Layout'
import RadioTheme from '../config/theme/RadioTheme'
import CheckboxTheme from '../config/theme/CheckboxTheme'
import DatePickerTheme from '../config/theme/DatePickerTheme'
import { SearchIcon, ClearIcon } from '../../../components/Icon'
const CheckboxWithLabel = styled.div`
  ${withLabelStyle}; 
`


const SelectComponents = (
  { field = {}, i18n,
    handleTextInput,
    handlePopupSearch,
    handleDropdown,
    handleCheckbox, handleCheckedNone,
    handleRadio,
    handleDatePicker }) => {
  const CurrentLanguage = i18n.language;

  if (field.hidden) {
    return <div className={field.className}></div>
  }

  const initField = {
    testId: { testSectionId: 'testSectionId', testId: 'testId' },
    placeholder: i18n.t(field.placeholder),
    label: i18n.t(field.label), // for withLabel
    optionalLabel: i18n.t(R.defaultTo('', field.optionalLabel)),
    requiredMessage: i18n.t(R.defaultTo('please-fill', field.requiredMessage)),
    errorMessage: i18n.t(R.defaultTo('please-fill-correct', field.errorMessage)),
    required: R.defaultTo(false, field.required),
    error: R.defaultTo(false, field.error),
    disabled: R.defaultTo(false, field.disabled), // for Component
    wrapperStyle: withLabelStyle // withLabel,
  }

  switch (field.action) {
    case 'TextInput':
      return (
        <TextInput
          {...initField}
          fieldId={field.id}
          value={R.defaultTo("", field.value)}
          onChange={handleTextInput}
          mask={field.mask} // handle Mask
          maskChar={field.maskChar}
          regex={field.regex || null}
          className={classnames({ error: field.error })} // styling
        />
      )
    case 'Dropdown':
      return (
        <Dropdown
          {...initField}
          currentLanguage={CurrentLanguage}
          options={field.options} // handleData
          value={R.defaultTo(null, field.value)}
          onClick={handleDropdown}
          styleConfig={DropdownStyle}
        />
      )
    case 'PopupSearch':
      return (
        <PopupSearch
          {...initField}
          currentLanguage={CurrentLanguage}
          columns={[{ label: i18n.t(field.columns) }]}
          options={field.options}
          value={R.defaultTo({}, field.value)}
          onClick={handlePopupSearch}
          styleConfig={PopupStyle}  // style
          searchIcon={SearchIcon}
          clearIcon={ClearIcon}
          backButtonText={i18n.t('back')}
        />
      )
    case 'Radio':
      const defaultValue = R.defaultTo(field.value);
      return (
        <Radio
          {...initField}
          currentLanguage={CurrentLanguage}
          options={field.options}
          value={defaultValue(field.value ? field.value.code : null)}
          onClick={handleRadio}
          theme={field.theme || RadioTheme}
        />
      )
    case 'Checkbox':
      const renderCheckbox = field.options.map(item => {
        return (
          <div className='tablet-6 phone-6' key={`key-checkbox-health1-${item.code}`}>
            <ItemWrapper>
              <Checkbox
                label={item.translations[CurrentLanguage].label}
                value={R.defaultTo(field.value, field.value[item.code])}
                onClick={isChecked => handleCheckbox(item, isChecked)}
                theme={CheckboxTheme}
              />
            </ItemWrapper>
          </div>
        )
      })
      return (
        <CheckboxWithLabel>
          <div className="label">{i18n.t(field.label)}</div>
          <Form>
            {renderCheckbox}
            <div className='tablet-6 phone-6' style={{ paddingTop: '10px' }}>
              <ItemWrapper>
                <Checkbox
                  label={i18n.t('noneOf')}
                  theme={CheckboxTheme}
                  value={field.value.none === 'N'}
                  onClick={(isChecked) => handleCheckedNone(isChecked)}
                />
              </ItemWrapper>
            </div>
          </Form>
        </CheckboxWithLabel>
      )
    case 'DatePicker':
      return (
        <DatePicker
          {...initField}
          value={R.defaultTo('', field.value)}
          onClick={handleDatePicker}
          theme={DatePickerTheme}
          currentLanguage={CurrentLanguage}
        />
      )
    case 'Textarea':
      return (
        <Textarea
          {...initField}
          value={R.defaultTo("", field.value)}
          onChange={handleTextInput}
          className={classnames({ error: field.error })}
        />
      )
    default:
      return <div className={field.className}></div>
  }
}

export default translate()(SelectComponents);