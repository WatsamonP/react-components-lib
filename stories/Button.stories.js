import React from 'react';
import styled from 'styled-components'

// storybook
import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs/react';
import { actions } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

// components
import Button from '../src/components/base/Button'

// styled
import ButtonStyle from './Styles/ButtonStyle'
import CheckedIconSvg from './assets/icon/checked-icon.svg'

// docs
import { ButtonInfo } from './Notes'
import { Start, withStyle, withStyled } from './Notes/Button/README'

// handle
const eventFormButton = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

const stories = storiesOf(`Button`, module)
/******************************************************************* */
stories
  .addDecorator(withReadme(Start))
  .add('Getting Start', () => (
    <Button
      {...eventFormButton}
      label={text('Label', 'Simple Button')}
      children={text('Children', 'Children Simple Button')}
      disabled={boolean('Disabled', false)}
      leftIcon={object('LeftIcon', "ICON")}
      rightIcon={object('RightIcon', "😂")}
      style={object('Style', {})}
      leftIconStyle={object("LeftIconStyle", { paddingRight: '10px' })}
      rightIconStyle={object('RightIconStyle', { paddingLeft: '10px' })}
    />
  ), ButtonInfo['Start'])


// /******************************************************************* */
// // withStyle
const simpleStyle = {
  fontSize: "16px",
  height: "36px",
  padding: "4px 12px",
  borderRadius: "8px",
  outline: "none",
  border: "none",
  fontWeight: "bold",
}
stories
  .addDecorator(withReadme(withStyle))
  .add('Button + style', () => (
    <Button
      {...eventFormButton}
      label={text('Label', 'Button + style')}
      children={text('Children', 'Children Simple Button')}
      disabled={boolean('Disabled', false)}
      leftIcon={object('LeftIcon', <CheckedIconSvg />)}
      rightIcon={object('RightIcon', null)}
      style={object('Style', simpleStyle)}
      leftIconStyle={object("LeftIconStyle", { paddingRight: '10px' })}
      rightIconStyle={object('RightIconStyle', {})}
    />
  ), ButtonInfo['withStyle'])

// // /******************************************************************* */
// // witStyled
const StyledBtn = styled(Button)`
  ${ButtonStyle}
`
stories
  .addDecorator(withReadme(withStyled))
  //.addParameters({ jest: ['Button'] })
  .add('Button + 💅', () => (
    <StyledBtn
      {...eventFormButton}
      label={text('Label', 'Button + StyledComponents')}
      children={text('Children', 'Children Simple Button')}
      disabled={boolean('Disabled', false)}
      leftIcon={object('LeftIcon', null)}
      rightIcon={object('RightIcon', null) || text('RightIcon', '💅')}
      style={object('Style', {})}
      leftIconStyle={object("LeftIconStyle", {})}
      rightIconStyle={object('RightIconStyle', { paddingLeft: '10px' })}
    />
  ), ButtonInfo['withStyled'])
