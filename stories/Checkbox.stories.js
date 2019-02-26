import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

// component
import SimpleUseCompoent from './view/Checkbox'

// doc
import { CheckboxInfo } from './Notes'
import { SimpleUse } from './Notes/Checkbox/README'

const stories = storiesOf(`Checkbox 🎨`, module)
/******************************************************************* */
stories
  .addDecorator(withReadme(SimpleUse))
  .addParameters({ jest: ['Checkbox'] })
  .add('Simple Use', () => (
    <SimpleUseCompoent />
  ), CheckboxInfo['SimpleUse'])