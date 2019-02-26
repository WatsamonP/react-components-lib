import styled from 'styled-components';

import { ButtonComponent } from 'react-components-lib'
import { JoyTheme } from '../Style/JoyTheme'
import ButtonStyle from '../Style/ButtonStyle'

export const NavyBtn = styled(ButtonComponent)`
  ${ButtonStyle};
  background-color: ${JoyTheme.NAVY};
  color: ${JoyTheme.CREAM};
  height: 38px;
  min-width: 100px;
  :disabled {
    border: 2px solid ${JoyTheme.LIGHT_NAVY};
    background: ${JoyTheme.LIGHT_GREY};
    color: ${JoyTheme.LIGHT_NAVY};
  }
`

export const NavyOutlineBtn = styled(ButtonComponent)`
  ${ButtonStyle};
  border: 2px solid ${JoyTheme.NAVY};
  background-color: ${JoyTheme.WHITE};
  color: ${JoyTheme.NAVY};
  height: 38px;
  min-width: 120px;
`

export const SubmitBtn = styled(ButtonComponent)`
  ${ButtonStyle};
  background-color: ${JoyTheme.CREAM};
  min-width: 110px;

`