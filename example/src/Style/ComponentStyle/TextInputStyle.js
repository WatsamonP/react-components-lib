import { css } from 'styled-components'
import { Colors, Font } from '../../constants/styles'

export default css`
  box-sizing: border-box;
  height: 44px;
  width: 100%;
  border: 1px solid ${Colors.GREY};
  border-radius: 8px;
  background-color: ${Colors.WHITE};
  color: ${Colors.BLUE};
  font-size: 16px;
  padding-left:12px;

  :focus {
    outline: none;
    border: solid 1px ${Colors.BLUE};
  }

  :disabled {
    color: ${Colors.WHITE};
    background: ${Colors.GREY};
  }

  &.error{
    border: solid 1px ${Colors.RED};
  }
`
