import { css } from 'styled-components'
import { JoyTheme } from './JoyTheme'

export default css`
  &.error {
    color: ${JoyTheme.DANGER};
    >:nth-child(2) {
      border: 1px solid ${JoyTheme.DANGER};
    }
  }

  .label {
    font-weight: bold;
    color: ${JoyTheme.NAVY};
    display: block;
    margin-bottom: 5px;
  }

  .bottomLabel {
    display: block;
    margin-bottom: 5px;
    &.error {
      color: ${JoyTheme.DANGER};
    }
  }
`