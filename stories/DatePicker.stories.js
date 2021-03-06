import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, object, boolean, select } from '@storybook/addon-knobs/react';
import { LANGUAGE_LIST } from './utils/KnobSelectList'

// component
import DatePicker from '../src/components/base/DatePicker'

// notes+style_decorate
import { DatePickerInfo } from './Notes'
import { SimpleUse } from './Notes/DatePicker/README' 
import { JoyTheme, Font } from './Styles/JoyTheme'
import TextInputStyle from './Styles/TextInputStyle'
import ReturnValue from './components/ReturnValue'
import Popup from './components/Popup'
import DatePickerJpg from './assets/images/DatePicker.jpg'
import DatePickerStyle from './Styles/DatePickerStyle'

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
          currentLanguage={select('currentLanguage', LANGUAGE_LIST, 'th')}
          onClick={this.handleClick}
          value={this.state.mySelect}
          minDate={new Date()}
          theme={(this.handleTheme(boolean("🎨 ENABLE THEME", true)))}
          disabled={boolean("disabled", false)}
        />

        <ReturnValue
          title={`Return timestamp`}
          value={this.state.mySelect} />
      </div>
    )
  }
}

const stories = storiesOf(`DatePicker 🎨`, module)
/******************************************************************* */
stories
  .addParameters({ jest: ['DatePicker'] })
  .addDecorator(withReadme(SimpleUse))
  .add('Simple Use', () => (
    <DatePickerSimpleUse />
  ), DatePickerInfo['SimpleUse'])
