import React from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import InputStyle from '../../../Style/InputStyle'
import CalendarIcon from './CalendarIconSvg'
import ClearIcon from './ClearIconSvg'
// import CalendarIcon from '../../../assets/icon/calendar.svg'
// import ClearIcon from '../../../assets/icon/cross-black-circular-button.svg'
import { buddhistYear, getMinDate, getMaxDate, getYear, getMonth, getDate, getNowDate, getTimestamp } from '../../../utils/time'
import DatePickerStyle from '../../../Style/DatePickerStyle'
import DatePickerHeader from './DatePickerHeader'
import PropTypes from 'prop-types'

const DatePickerWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  cursor: default;
`

const DatePickerContainer = styled.div`
  position: absolute;
  z-index: 250;
  width: 100%;
  ${props => props.theme && props.theme.datePickerStyle ? props.theme.datePickerStyle : DatePickerStyle}
`

const IconWrapper = styled.i`
  position: absolute;
  padding: 15px 25px;
  line-height: 14px;
  ${props => props.theme && props.theme.iconStyle ? props.theme.iconStyle : ''}
`

const ClearIconWrapper = styled.i`
  position: absolute;
  padding: 17px 20px;
  line-height: 16px;
  right: 1px;
  ${props => props.theme && props.theme.clearIconStyle ? props.theme.clearIconStyle : ''};
`

const InputWrapper = styled.input`
  padding-left: 70px;
  cursor: default;
  outline: none;
  caret-color: transparent;
  ${props => props.theme && props.theme.textInput ? props.theme.textInput : InputStyle};
`

export const getElementOffset = (el) => {
  const self = el.getBoundingClientRect()
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: self.top + scrollTop, left: self.left + scrollLeft, self }
}

class DatePickerComponent extends React.PureComponent {
  state = {
    isOpen: false,
    selectedDate: new Date(),
  }

  handlePopOver = (e) => {
    if (window.cordova && window.bridging) {
      const { top, left, self } = getElementOffset(e.target.closest('div.input-datepicker'))
      const {
        value = {}, defaultValue = new Date(), minDate, maxDate, disabledClear = true,
        currentLanguage
      } = this.props

      const selectedDate = value || defaultValue
      const datePicker = { width: 325, height: 320, language: currentLanguage }
      const now = getNowDate(selectedDate)
      const min = getMinDate(minDate)
      const max = getMaxDate(maxDate)
      const positionModel = {
        x: left - 150,
        y: top > datePicker.height ? top - 10 : ((top + self.height) - 10),
        arrowDirection: top > datePicker.height ? 'down' : 'up',
      }

      const dateModel = {
        dateFormat: 'DD/MM/YYYY',
        setDate: now,
        minDate: {
          type: 'date', day: getDate(min), month: getMonth(min), year: getYear(min),
        },
        maxDate: {
          type: 'date', day: getDate(max), month: getMonth(max), year: getYear(max),
        },
        ENDateFormat: 'd MMMM yyyy',
        THDateFormat: 'd MMMM yyyy',
      }

      window.bridging.callEvent('openDatePicker', {
        isDisable: disabledClear,
        ...datePicker,
        ...dateModel,
        ...positionModel,
      }, (r) => {
        if (r.timestamp) {
          this.handleDayClick(r.timestamp, { disabled: false })
        }
      }, (e) => { console.log(e) })
    } else {
      this.setState({ isOpen: true })
    }
  }

  handleClosePopOver = () => {
    this.setState({ isOpen: false })
  }

  handleClearDate = () => {
    const { onClick = () => null } = this.props
    onClick(undefined)
  }

  handleDayClick = (day, { disabled = false }) => {
    const { onClick = () => null } = this.props

    if (!disabled) {
      this.setState({ selectedDate: day })
      onClick(getTimestamp(day))
    }

    this.handleClosePopOver()
  }

  render() {
    const {
      testId = {},
      value,
      minDate,
      maxDate,
      required,
      disabled = false,
      placeholder = "วว/ดด/ปปปป",
    } = this.props

    const customHeader = props => <DatePickerHeader theme={this.props.theme} {...props} />
    return (
      <DatePickerWrapper className={`${this.props.className} input-datepicker`}>
        <IconWrapper onClick={this.handlePopOver} theme={this.props.theme}>
          <CalendarIcon />
        </IconWrapper>

        <InputWrapper
          autoComplete="off"
          placeholder={placeholder}
          onClick={this.handlePopOver}
          value={value && buddhistYear('th', value)}
          testId={`calendar-${testId.testSectionId}-${testId.testId}`}
          readOnly
          disabled={disabled}
          theme={this.props.theme}
        />

        {value &&
          !required && (
            <ClearIconWrapper onClick={this.handleClearDate} theme={this.props.theme}>
              <ClearIcon />
            </ClearIconWrapper>
          )}

        <DatePickerContainer theme={this.props.theme}>
          {this.state.isOpen && (
            <DatePicker
              dropdownMode="select"
              minDate={minDate}
              maxDate={maxDate}
              testId={testId}
              style={{ position: 'absolute' }}
              selected={value !== '' ? value : this.state.selectedDate}
              onChange={this.handleDayClick}
              inline={this.state.isOpen}
              onClickOutside={this.handleClosePopOver}
              renderCustomHeader={customHeader}
            />
          )}
        </DatePickerContainer>
      </DatePickerWrapper>
    )
  }
}

DatePickerComponent.propTypes = {
  /** for testing testId = { testSectionId: "", testId: "" } */
  testId: PropTypes.object
}

export default DatePickerComponent
