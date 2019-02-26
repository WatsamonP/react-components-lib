import { JoyTheme, Font } from '../../../../Style/JoyTheme'

const RadioTheme = {
  // wrapper
  wrapperStyle: { 'min-height': '50px', 'margin': '0' },
  wrapperBorder: '', //JoyTheme.NAVY
  wrapperBackground: JoyTheme.LIGHT,

  // item วงกลม
  symbolColor: JoyTheme.WHITE,
  symbolStroke: JoyTheme.NAVY,

  labelColor: JoyTheme.NAVY,
  itemBorder: JoyTheme.NAVY,
  itemColor: '',

  active: {
    itemColor: JoyTheme.NAVY,
    labelColor: JoyTheme.WHITE,

    symbolColor: JoyTheme.LIGHT,
    symbolStroke: JoyTheme.CREAM,

    checkedColor: JoyTheme.TAN,
    checkedStroke: JoyTheme.CREA,
  },

  disabled: {
    labelColor: JoyTheme.GREY,
    itemColor: JoyTheme.LIGHT,
    itemBorder: '',
    symbolStroke: JoyTheme.GREY,
  },

  error: {
    itemColor: JoyTheme.LIGHT,
    itemBorder: JoyTheme.DANGER,
    symbolStroke: JoyTheme.DANGER,
    labelColor: JoyTheme.DANGER,
  },

  labelStyle: {
    'font-family': Font.DEFAULT,
    'font-size': '14px',
  }
}

export default RadioTheme;