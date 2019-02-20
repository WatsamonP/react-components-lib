import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { text, boolean, select, object } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { LANGUAGE_LIST, GENDER_LIST } from './utils/KnobSelectList'

// component
import Radio from '../src/components/base/Radio'
import SimpleUseCompoent from './view/Radio'

// doc
import { RadioInfo } from './Notes'
import { SimpleUse } from './Notes/Radio/README'

/******************************************************************* */
// data
import master from './utils/master.json'
const genders = master.genders;

const actionWithReturn = (name) => (...args) => {
  action(name)(...args)
}

const stories = storiesOf(`Radio 🎨`, module)
/******************************************************************* */
// Default
// stories.add('Getting Start', () => (
//   <Radio
//     value={select("🎯 Value (code)", GENDER_LIST, 'M')}
//     fieldId={text("fieldId", "genders")}
//     options={object("Options", genders)}
//     onClick={actionWithReturn('radio-click')}
//     currentLanguage={select('currentLanguage', LANGUAGE_LIST, 'th')}
//     error={boolean("📕 Error", false)}
//     disabled={boolean("📓 Disabled", false)}
//   />
// ), RadioInfo['Start'])

stories
  .addDecorator(withReadme(SimpleUse))
  //.addParameters({ jest: ['Radio'] })
  .add('Simple Use', () => (
    <SimpleUseCompoent />
  ), RadioInfo['SimpleUse'])
