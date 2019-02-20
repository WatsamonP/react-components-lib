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
    color: ${JoyTheme.NAVY}
  }

  .bottomLabel {
    &.error {
      color: ${JoyTheme.DANGER};
    }
  }
`