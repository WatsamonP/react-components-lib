import { css } from 'styled-components'
import { Colors, Font } from '../../constants/styles'

export default css`
  font-size: 16px;
  height: 36px;
  padding:4px 12px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-weight: bold;
  background: ${Colors.BLUE};
  color: ${Colors.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :disabled {
    border: 1px solid ${Colors.GREY};
    background: ${Colors.WHITE};
    color: ${Colors.BLUE};
    cursor: not-allowed;
  }
`