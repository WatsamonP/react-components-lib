import React from 'react'

// storybook
import { text, object, color, boolean } from '@storybook/addon-knobs/react';

// component
import DatePicker from '../../src/components/base/DatePicker'

// style_decorate
import { JoyTheme, Font } from '../Styles/JoyTheme'
import TextInputStyle from '../Styles/TextInputStyle'
import ReturnValue from '../components/ReturnValue'
import Popup from '../components/Popup'
import DatePickerJpg from '../assets/images/DatePicker.jpg'

const myTheme = () => {
  return {
    icon: object('Icon (style)', {
      'padding': '11px 15px',
      '#Shape': {
        fill: color("#Shape fill", JoyTheme.TAN)
      }
    }),
    clearIcon: object('ClearIcon (style)', { padding: '12px 15px' }),
    textInput: {
      ...TextInputStyle,
      'font-family': Font.DEFAULT,
      borderColor: JoyTheme.NAVY,
      boxSizing: 'border-box'
    },
    header: { 'font-family': Font.DEFAULT, }
  }
}

class DatePickerSimpleUse extends React.Component {

  state = { mySelect: undefined }

  handleClick = (res) => {
    console.log(res)
    this.setState({ mySelect: res })
  }

  handleTheme = (bool) => (bool? myTheme() : {})

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