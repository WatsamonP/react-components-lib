import React from 'react'
import * as R from 'ramda'
import Select from 'react-select'
import styled from 'styled-components'
import PropTypes from 'prop-types'


// TODO: Move mapping options to selectors
const convertOption = (options, testId, currentLanguage) => {
  const newOptions = []

  options.map((option) => {
    const newObj = {
      ...option,
      value: option.code,
      label: R.path([currentLanguage, 'label'], option.translations),
      testId: `dropdown-item-${testId.testSectionId}-${testId.testId}-${option.code}`,
    }

    newOptions.push(newObj)
  })

  return newOptions
}

const SelectWrapper = styled(Select)`
  ${props => props.styleConfig || ``}
`

class Dropdown extends React.PureComponent {

  render() {
    const {
      options = [],
      testId = {},
      value,
      placeholder = 'placeholder.dropdown',
      onClick,
      styleConfig = {},
      currentLanguage,
      disabled
    } = this.props

    const convertedObj = convertOption(options, testId, currentLanguage)

    const obj = value ? {
      ...value,
      value: value.code,
      label: R.path([currentLanguage, 'label'], value.translations),
    } : undefined

    return (
      <SelectWrapper
        value={obj}
        options={convertedObj}
        onChange={onClick}
        placeholder={placeholder}
        isSearchable={false}
        isDisabled={disabled}
        styleConfig={styleConfig}
        classNamePrefix="react-select"
        className={`${this.props.className}`}
      />
    )
  }
}

Dropdown.propTypes = {
  /** for testing testId = { testSectionId: "", testId: "" } */
  testId: PropTypes.object,
  /** 'th' or 'en' */
  currentLanguage: PropTypes.string,
  /** vill return object */
  value: PropTypes.object,
  /** data that need to display */
  options: PropTypes.array,
  /**  */
  placeholder: PropTypes.string,
  /** handle Function */
  onChange: PropTypes.func,
};

export default Dropdown
