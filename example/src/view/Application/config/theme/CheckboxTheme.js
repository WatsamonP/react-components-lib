import { JoyTheme, Font } from '../../../../Style/JoyTheme'

const RadioTheme = {
  border: JoyTheme.NAVY,
  checkColor: JoyTheme.WHITE,
  checkedColor: JoyTheme.CREAM,
  checkedStroke: JoyTheme.LIGHT_NAVY,
  checkedBackground: JoyTheme.NAVY,
  labelColor: JoyTheme.NAVY,
  error: {
    border: JoyTheme.DANGER,
    checkedColor: JoyTheme.WHITE,
    checkedBackground: JoyTheme.WHITE,
    labelColor: JoyTheme.GREY,
  },
  labelStyle: {
    'font-family': Font.DEFAULT,
    'font-size': '16px'
  }
}

export default RadioTheme;