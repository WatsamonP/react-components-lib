import React from 'react'
import styled from 'styled-components'
import { getYear, getMonth, yearsRange, thaiMonths } from '../../../utils/time'
import { Label1 } from '../../Typography/Typography'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 4px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const DateTitle = styled(Label1)`
  ${props => props.theme.header ? props.theme.header : ''};
  font-size: 26px;
`

const ButtonWrapper = styled.button`
  border: none;
  font-weight: bold;
  font-size: 16px;
  margin-top: 6px;
  outline: none;
`

const DatePickerHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  theme
}) => {
  const handleChangeYear = (e) => {
    const { value: year } = e.target
    changeYear(year)
  }

  const handleChangeMonth = (e) => {
    const { value: month } = e.target
    changeMonth(month)
  }

  return (
    <HeaderWrapper>
      <ButtonWrapper id="decrease-month" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {'<'}
      </ButtonWrapper>
      <TitleWrapper>
        <DateTitle theme={theme}>
          {thaiMonths[getMonth(date)]} {getYear(date) + 543}
        </DateTitle>
        <DropdownWrapper>
          <select
            id="select-month"
            value={getMonth(date)}
            onChange={handleChangeMonth}
            style={{ marginRight: '4px' }}
          >
            {thaiMonths.map((option, index) => (
              <option key={option} value={index}>
                {option}
              </option>
            ))}
          </select>

          <select id="select-year" value={getYear(date)} onChange={handleChangeYear}>
            {yearsRange(date).map(option => (
              <option key={option} value={option}>
                {option + 543}
              </option>
            ))}
          </select>
        </DropdownWrapper>
      </TitleWrapper>

      <ButtonWrapper id="increase-month" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {'>'}
      </ButtonWrapper>
    </HeaderWrapper>
  )
}

export default DatePickerHeader
