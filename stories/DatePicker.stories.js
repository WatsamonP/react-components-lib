import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// component
import SimpleUseCompoent from './view/DatePicker'

// notes
import { DatePickerInfo } from './Notes'
import { SimpleUse } from './Notes/DatePicker/README'


const stories = storiesOf(`DatePicker 🎨`, module)
/******************************************************************* */
stories
  .addParameters({ jest: ['DatePicker'] })
  .addDecorator(withReadme(SimpleUse))
  .add('Simple Use', () => (
    <SimpleUseCompoent />
  ), DatePickerInfo['SimpleUse'])
