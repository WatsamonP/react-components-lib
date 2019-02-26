import React from 'react'

// storybook
import { text, object, boolean } from '@storybook/addon-knobs/react';

// component
import DatePicker from '../../src/components/base/DatePicker'

// style_decorate
import { JoyTheme, Font } from '../Styles/JoyTheme'
import TextInputStyle from '../Styles/TextInputStyle'
import ReturnValue from '../components/ReturnValue'
import Popup from '../components/Popup'
import DatePickerJpg from '../assets/images/DatePicker.jpg'
import DatePickerStyle from '../Styles/DatePickerStyle'

const myTheme = () => {
  return {
    iconStyle: object("icon", {
      'padding': '10px 15px',
      '#Shape': {
        fill: JoyTheme.LIGHT_NAVY
      }
    }),
    clearIconStyle: object("clearIcon", {
      padding: '12px 10px',
      cursor: 'pointer'
    }),
    textInput: object("textInput", {
      ...TextInputStyle,
      'font-family': Font.DEFAULT,
      borderColor: JoyTheme.NAVY,
      boxSizing: 'border-box',
      'text-align': 'center'
    }),
    dateTitle: object("dateTitle", { 'font-family': Font.DEFAULT, color: JoyTheme.NAVY }),
    datePickerStyle: DatePickerStyle,
    buttonWrapper: object("buttonWrapper",{
      'font-family': Font.DEFAULT,
      'font-size': '20px',
      color: JoyTheme.NAVY,
      'background-color': JoyTheme.WHITE,
      'text-shadow': `2px 2px 2px ${JoyTheme.CREAM}`
    })
  }
}

class DatePickerSimpleUse extends React.Component {

  state = { mySelect: undefined }

  handleClick = (res) => {
    console.log(res)
    this.setState({ mySelect: res })
  }

  handleTheme = (bool) => (bool ? myTheme() : {})

  render() {
    return (
      <div>
        <div style={{ paddingBottom: '30px' }}>
          <Popup img={DatePickerJpg} />
        </div>

        <DatePicker
          placeholder={text("PlaceHolder", 'วัน/เดือน/ปี')}
          currentLanguage='th'
          onClick={this.handleClick}
          value={this.state.mySelect}
          minDate={new Date()}
          theme={(this.handleTheme(boolean("🎨 ENABLE THEME", true)))}
        />

        <ReturnValue
          title={`Return timestamp`}
          value={this.state.mySelect} />
      </div>
    )
  }
}

export default DatePickerSimpleUse