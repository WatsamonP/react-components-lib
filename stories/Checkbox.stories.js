import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { text, boolean, select, object, radios } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withReadme, } from 'storybook-readme';

// component
import Checkbox from '../src/components/base/Checkbox'
import SimpleUseCompoent from './view/Checkbox'

// doc
import { CheckboxInfo } from './Notes'
import { Start, SimpleUse } from './Notes/Checkbox/README'

const stories = storiesOf(`Checkbox 🎨`, module)
/******************************************************************* */
// stories.add('Getting Start', () => (
//   <Checkbox />
// ), CheckboxInfo['Start'])

stories
  .addDecorator(withReadme(SimpleUse))
  //.addParameters({ jest: ['Checkbox'] })
  .add('Simple Use', () => (
    <SimpleUseCompoent />
  ), CheckboxInfo['SimpleUse'])