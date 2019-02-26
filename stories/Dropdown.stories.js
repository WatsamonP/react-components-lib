import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, select } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';

// component
import Dropdown from '../src/components/base/Dropdown'
import SimpleUseCompoent from './view/Dropdown'

// docs
import { DropdownInfo } from './Notes'
import { Start, SimpleUse } from './Notes/Dropdown/README'

// 
import master from './utils/master.json'
import { LANGUAGE_LIST } from './utils/KnobSelectList'

const identityResources = master.identityResources

const handleOnClick = (selectedOption) => {
  console.log(selectedOption)
}

const getCurrentLanguage = () => ('th')

const stories = storiesOf(`Dropdown`, module)
/******************************************************************* */
// Default
stories
  .addDecorator(withReadme(Start))
  .add('Getting Start', () => (
    <Dropdown
      value={null}
      options={identityResources}
      placeholder={text("Placeholder", "เอกสารที่ใช้แสดง")}
      onClick={action(handleOnClick)}
      styleConfig={object("StyleConfig", {})}
      currentLanguage={select("CurrentLanguage", LANGUAGE_LIST, getCurrentLanguage())}
    />
  ), DropdownInfo['Start'])

stories
  .addDecorator(withReadme(SimpleUse))
  .addParameters({ jest: ['Dropdown'] })
  .add('Simple Use', () => (
    <SimpleUseCompoent />
  ), DropdownInfo['SimpleUse'])


