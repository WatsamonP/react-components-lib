import { css } from 'styled-components'
import { Colors, Font } from './constants'

export default css`
  height: 56px;
  width: 100%;
  border: 1px solid ${Colors.SILVER_SAND};
  border-radius: 8px;
  background-color: ${Colors.WHITE};
  font-family: "${Font.DEFAULT}";
  color: ${Colors.FUN_BLUE};
  font-size: 28px;
  -webkit-appearance: none;

  :focus {
    outline: none;
    border: solid 1px;
  }

  :disabled {
    background: ${Colors.DARK_PORCELAIN};
  }

  &.error {
    border: 1px solid ${Colors.CINNABAR};
  }
`
