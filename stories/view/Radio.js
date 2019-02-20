import React from 'react'
import _ from 'lodash'

// storybook addon
import { boolean, select, color } from '@storybook/addon-knobs/react';
import { LANGUAGE_LIST } from '../utils/KnobSelectList'

// component
import Radio from '../../src/components/base/Radio'

// data
import master from '../utils/master.json'

// style_decorate
import { JoyTheme, Font } from '../Styles/JoyTheme'
import ReturnValue from '../components/ReturnValue'
import Popup from '../components/Popup'
import RadioJpg from '../assets/images/Radio.jpg'

const myTheme = () => {
  return {
    // wrapper
    wrapperBorder: color("📘 wrapperBorder", JoyTheme.NAVY),
    wrapperBackground: color("📘 wrapperBackground", JoyTheme.LIGHT),

    // item วงกลม
    symbolColor: color("📘 symbolColor", JoyTheme.WHITE),
    symbolStroke: color("📘 symbolStroke", JoyTheme.NAVY),

    labelColor: color("📘 labelColor", JoyTheme.NAVY),
    itemBorder: color("📘 itemBorder", JoyTheme.NAVY), // เส้นขั้นระหว่าง item
    itemColor: color("📘 itemColor", ''),  // ทับสี wrapperBackground

    active: {
      itemColor: color("📒 active: itemColor", JoyTheme.NAVY), // pass
      labelColor: color("📒 active: labelColor", JoyTheme.WHITE),  // pass

      symbolColor: color("📒 active: symbolColor", JoyTheme.LIGHT),
      symbolStroke: color("📒 active: symbolStroke", JoyTheme.CREAM),

      checkedColor: color("📒 active: checkedColor", JoyTheme.TAN),
      checkedStroke: color("📒 active: checkedStroke", JoyTheme.CREAM)
    },

    disabled: {
      labelColor: color("📓 disabled: labelColor", JoyTheme.GREY),
      itemColor: color("📓 disabled: itemColor", JoyTheme.LIGHT),
      itemBorder: color("📓 disabled: itemBorder", ''),
      symbolStroke: color("📓 disabled: symbolStroke", JoyTheme.GREY),
    },

    error: {
      itemColor: color("📕 error: itemColor", JoyTheme.LIGHT),
      itemBorder: color("📕 error: itemBorder", JoyTheme.DANGER),
      symbolStroke: color("📕 error: symbolStroke", JoyTheme.DANGER),
      labelColor: color("📕 error: labelColor", JoyTheme.DANGER),
    },

    labelStyle: {
      'font-family': Font.DEFAULT,
      'font-size': '16px'
    }
  }
}

class RadiSimpleUse extends React.Component {

  state = {
    options: master.genders,
    selected: null,
    slectedCode: null
  }

  getValue = (code) => {
    return _.find(this.state.options, ['code', code])
  }

  handleClick = (fieldId) => (code) => {
    this.setState(
      {
        slectedCode: code,
        selected: this.getValue(code)
      }
    )
  }

  handleTheme = (bool) => (bool? myTheme() : {})

  render() {
    return (
      <div>

        <div style={{ paddingBottom: '10px' }}>
          <Popup img={RadioJpg} />
        </div>

        <Radio
          fieldId="maritialStatus"
          // id={}
          value={this.state.slectedCode}
          options={this.state.options}
          onClick={this.handleClick("maritialStatus")}
          currentLanguage={select('currentLanguage', LANGUAGE_LIST, 'th')}
          error={boolean("📕 Error", false)}
          disabled={boolean("📓 Disabled", false)}
          theme={(this.handleTheme(boolean("🎨 ENABLE THEME", true)))}
        />

        <ReturnValue value={this.state.selected} />
      </div>
    )
  }
}

export default RadiSimpleUse