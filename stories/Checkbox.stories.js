import React from 'react';

// storybook
import { boolean, color } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// component
import Checkbox from '../src/components/base/Checkbox'

// doc+style
import { CheckboxInfo } from './Notes'
import { SimpleUse } from './Notes/Checkbox/README'
import { JoyTheme, Font } from './Styles/JoyTheme'
import ReturnValue from './components/ReturnValue'
import Popup from './components/Popup'
import CheckboxJpg from './assets/images/Checkbox.jpg'
import master from './utils/master.json'

const myTheme = () => {
  return {
    border: color("Border", JoyTheme.NAVY),
    checkColor: color("checkColor", JoyTheme.WHITE),
    checkedColor: color("checkedColor", JoyTheme.CREAM),
    checkedStroke: color("checkedStroke", JoyTheme.LIGHT_NAVY),
    checkedBackground: color("checkedBackground", JoyTheme.NAVY),
    labelColor: color("labelColor", JoyTheme.NAVY),
    error: {
      border: color("📕 error: Border", JoyTheme.DANGER),
      checkedColor: color("📕 error: checkedColor", JoyTheme.WHITE),
      checkedBackground: color("📕 error: checkedBackground", JoyTheme.WHITE),
      labelColor: color("📕 error: labelColor", JoyTheme.GREY),
    },
    labelStyle: {
      'font-family': Font.DEFAULT,
      'font-size': '16px'
    }
  }
}

class CheckboxSimpleUse extends React.Component {
  state = {
    healthQues1: {
      fieldId: 'healthQues1',
      options: master.healthQues1,
      testId: {
        testId: 'testId',
        testSectionId: 'testSectionId'
      },
      value: {},
      list: [],
    }
  }

  getValue = (options, code) => (_.find(options, ['code', code]))


  handleClick = (key) => (isChecked) => {
    const { fieldId, value, list, options } = this.state.healthQues1;

    let checkKey = isChecked ? true : false;
    let isAlready = this.getValue(list, key.code) ? true : false;

    let newState = {
      ...this.state.healthQues1,
      value: { ...value, [key.code]: checkKey },
      list: _.compact([
        ...list,
        isAlready ? null : this.getValue(options, key.code)
      ])
    }
    this.setState({ [fieldId]: newState })
  }

  handleTheme = (bool) => (bool ? myTheme() : {})

  render() {
    return (
      <div>

        <div style={{ paddingBottom: '10px' }}>
          <Popup img={CheckboxJpg} />
        </div>

        {
          this.state.healthQues1.options.map(key => (
            <div key={`healthQues1-${key.code}`}>
              <Checkbox
                value={this.state.healthQues1.value[key.code]}
                label={key.translations.th.label}
                testId={this.state.testId}
                onClick={this.handleClick(key)}
                error={boolean("📕 Error", false)}
                theme={(this.handleTheme(boolean("🎨 ENABLE THEME", true)))}
              />
            </div>
          ))
        }

        <ReturnValue
          title={`state of healthQues1.value`}
          optional={'onClick will return only (boolean) (up to init State & handle Function)'}
          value={this.state.healthQues1.value} />

        <ReturnValue
          title={`state of healthQues1.list`}
          optional={'(up to init State & handle Function)'}
          value={this.state.healthQues1.list} />

      </div>
    )
  }
}


const stories = storiesOf(`Checkbox 🎨`, module)
/******************************************************************* */
stories
  .addDecorator(withReadme(SimpleUse))
  .addParameters({ jest: ['Checkbox'] })
  .add('Simple Use', () => (
    <CheckboxSimpleUse />
  ), CheckboxInfo['SimpleUse'])