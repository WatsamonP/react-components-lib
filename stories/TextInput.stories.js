import React from 'react';
import styled from 'styled-components'
import classnames from 'classnames'

// storybook
import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { TEXT_TYPE_LIST } from './utils/KnobSelectList'

// component
import TextInput from '../src/components/base/TextInput'
import SimpleUseCompoent from './view/TextInput'

// styled
import TextInputStyle from './Styles/TextInputStyle'

// docs
import { TextInputInfo } from './Notes'
import { Start, withMask, withStyled, SimpleUse } from './Notes/TextInput/README'


const actionWithReturn = (name) => (...args) => {
  action(name)(...args) // const { target } = args[0];
}

const stories = storiesOf('TextInput', module)


/***************************************************************** */
// Default
stories
  .addDecorator(withReadme(Start))
  .add('Getting Start', () => (
    <TextInput
      fieldId={text("Field ID (name)", "Getting_Start")}
      id={object("ID", { testSectionId: "testSectionId", testId: "testId" })}
      type={select("Type", TEXT_TYPE_LIST)}
      placeholder={text("Placeholder", "Getting Start")}
      onChange={actionWithReturn('textinput-change')}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      maxLength={number("Max Length")}
      className={classnames({ error: boolean("Error", false) })}
      style={object("Style", { backgroundColor: 'pink' })}
    />
  ), TextInputInfo['Start']);


/***************************************************************** */
// with Mask
stories
  .addDecorator(withReadme(withMask))
  .add('with Mask', () => (
    <TextInput
      fieldId={text("Field ID (name)", "textInputWithMask")}
      id={object("ID", { testSectionId: "testSectionId", testId: "testId" })}
      type={select("Type", TEXT_TYPE_LIST)}
      placeholder={text("Placeholder", "X XXXXX XXXX XX X")}
      mask={text("Mask", "9 99999 9999 99 9")}
      maskChar={text("MaskChar", " ")}
      onChange={actionWithReturn('textinput-change')}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      className={classnames({ error: boolean("Error", false) })}
      style={object("Style", {})}
    />
  ), TextInputInfo['withMask']);


/***************************************************************** */
// withStyled
const TextInputStyledComponent = styled(TextInput)`
  ${TextInputStyle}
`
stories
  .addDecorator(withReadme(withStyled))
  .add('with Styled 💅', () => (
    <TextInputStyledComponent
      fieldId={text("Field ID (name)", "TextInputStyle")}
      id={object("ID", { testSectionId: "testSectionId", testId: "testId" })}
      type={select("Type", TEXT_TYPE_LIST, 'text')}
      placeholder={text("Placeholder", 'Styled Component')}
      onChange={actionWithReturn('textinput-change')}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      maxLength={number("Max Length")}
      className={classnames({ error: boolean("Error", false) })}
      style={object("Style", {})}
    />
  ), TextInputInfo['withStyled']);


stories
  .addParameters({ jest: ['TextInput'] })
  .addDecorator(withReadme(SimpleUse))
  .add('Simple Use', () => <SimpleUseCompoent />, TextInputInfo['SimpleUse'])