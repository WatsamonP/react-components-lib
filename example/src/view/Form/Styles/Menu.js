import { css } from 'styled-components'
import { JoyTheme } from '../../../Style/JoyTheme'

export default css`
  z-index: 101;
  height:37px;
  padding-top:13px;
  padding-left:10px;
  text-decoration: none;
  color: ${JoyTheme.NAVY};
  display: block;
  transition: 0.2s;
  border-bottom: 1px solid ${JoyTheme.GREY};
  
  &.active {
    color: ${JoyTheme.NAVY};
    font-weight: bold;
    text-shadow: 2px 2px 4px ${JoyTheme.LIGHT_NAVY};
  }

  &:hover {
    color: ${JoyTheme.NAVY};
    background: ${JoyTheme.CREAM};
  }
`