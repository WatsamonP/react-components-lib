import React from 'react';

// storybook
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, select, array } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

// component
import PopupSearch from '../src/components/base/PopupSearch'
import SimpleUseCompoent from './view/PopupSearch'
import PopupSearchAnotherWay from './view/PopupSearchAnotherWay'
// import SimpleUseWithLabel from './view/PopupSearchLabel'

// styled
import PopupStyle from './Styles/PopupStyle'
import SearchIcon from './assets/icon/magnify-icon.svg'
import ClearIcon from './assets/icon/cross-black-circular-button.svg'

// docs
import { PopupSearchInfo } from './Notes'
import { Start, SimpleUse } from './Notes/PopupSearch/README'

const stories = storiesOf(`PopupSearch`, module)
/******************************************************************* */

stories
  .addDecorator(withReadme(Start))
  .add('Getting Start', () => (
    <SimpleUseCompoent />
  ), PopupSearchInfo['Start'])

stories
  .addDecorator(withReadme(SimpleUse))
  .add('Another way', () => (
    <PopupSearchAnotherWay />
  ), PopupSearchInfo['SimpleUse'])