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
import Textarea from '../src/components/base/Textarea'
import withLabel from '../src/components/base/withLabel'

// styled
import TextInputStyle from './Styles/TextInputStyle'
const TextareaWithStyle = styled(Textarea)`
  ${TextInputStyle};
  padding: 14px 20px;
  height: 250px;
  resize: none;
`

// docs
import { TextareaInfo } from './Notes'
import { Start, SimpleUse } from './Notes/Textarea/README'


const actionWithReturn = (name) => (...args) => {
  action(name)(...args) // const { target } = args[0];
}

const stories = storiesOf('Textarea', module)


/***************************************************************** */
// Default
stories
  .addDecorator(withReadme(Start))
  .add('Getting Start', () => (
    <Textarea
      fieldId={text("Field ID (name)", "Getting_Start")}
      id={object("ID", { testSectionId: "testSectionId", testId: "testId" })}
      type={select("Type", TEXT_TYPE_LIST, 'text')}
      placeholder={text("Placeholder", "Getting Start")}
      regex={object("REGEX", {})}
      onChange={actionWithReturn('textarea-change')}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      maxLength={number("Max Length")}
      className={classnames({ error: boolean("Error", false) })}
      style={object("Style", { backgroundColor: 'pink' })}
    />
  ), TextareaInfo['Start']);

/***************************************************************** */
const TextareaWithLabel = withLabel(TextareaWithStyle)
stories
  .addDecorator(withReadme(SimpleUse))
  .add('with Styled 💅', () => (
    <TextareaWithLabel
      fieldId={text("Field ID (name)", "TextInputStyle")}
      id={text("ID", 'TextareaStyle')}
      type={select("Type", TEXT_TYPE_LIST, 'text')}
      placeholder={text("Placeholder", 'Styled Component')}
      regex={object("REGEX", {})}
      onChange={actionWithReturn('textarea-change')}
      disabled={boolean("Disabled", false)}
      error={boolean("Error", false)}
      maxLength={number("Max Length")}
      className={classnames({ error: boolean("Error", false) })}
      style={object("Style", {})}
      label={text("label", 'Hello Textarea')}
      optionalLabel={text("label", '(if any)')}
    />
  ), TextareaInfo['SimpleUse']);