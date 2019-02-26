import { css } from 'styled-components'
import { JoyTheme } from '../../../Style/JoyTheme';

export default css`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: ${JoyTheme.WHITE};
  overflow-x: hidden;
  transition: 0.5s;
`