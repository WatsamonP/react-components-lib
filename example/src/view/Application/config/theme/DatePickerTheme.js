import { JoyTheme, Font } from '../../../../Style/JoyTheme'
import TextInputStyle from '../../../../Style/TextInputStyle'
import DatePickerStyle from '../../../../Style/DatePickerStyle'

const DatePickerTheme = {
  iconStyle: {
    'padding': '12px 15px',
    '#Shape': {
      fill: JoyTheme.LIGHT_NAVY
    }
  },
  clearIconStyle: {
    padding: '15px 10px',
    cursor: 'pointer'
  },
  textInput: {
    ...TextInputStyle,
    color: JoyTheme.NAVY,
    'font-family': Font.DEFAULT,
    borderColor: JoyTheme.NAVY,
    boxSizing: 'border-box',
    'padding-left': '52px'
  },
  dateTitle: { 'font-family': Font.DEFAULT, color: JoyTheme.NAVY },
  datePickerStyle: DatePickerStyle,
  buttonWrapper: {
    'font-family': Font.DEFAULT,
    'font-size': '20px',
    color: JoyTheme.NAVY,
    'background-color': JoyTheme.WHITE,
    'text-shadow': `2px 2px 2px ${JoyTheme.CREAM}`
  }
}

export default DatePickerTheme