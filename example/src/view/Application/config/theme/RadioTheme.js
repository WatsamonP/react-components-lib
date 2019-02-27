import { JoyTheme, Font } from '../../../../Style/JoyTheme'

const RadioTheme = {
  // wrapper
  wrapperStyle: { 'min-height': '48px', 'margin': '0', 'border-radius': '8px' },
  wrapperBorder: JoyTheme.NAVY,
  wrapperBackground: JoyTheme.WHITE,

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
    itemColor: JoyTheme.WHITE,
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