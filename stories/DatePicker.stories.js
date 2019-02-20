import React from 'react';
import styled from 'styled-components'
import classnames from 'classnames'
// storybook
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
// component
import SimpleUseCompoent from './view/DatePicker'
// styled
import DatePickerStyle from './Styles/DatePickerStyle'

const stories = storiesOf(`DatePicker 🎨`, module)
/******************************************************************* */
// Default
// stories.add('Default', () => (
//   <DatePicker
//     styleConfig={DatePickerStyle}
//   />
// ), //DropdownInfo['Default']
// )

stories
  .addParameters({ jest: ['DatePicker'] })
  .add('Simple Use', () => (
    <SimpleUseCompoent />
  ), //DropdownInfo['Default']
  )
