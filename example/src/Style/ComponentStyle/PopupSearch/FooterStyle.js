import { css } from 'styled-components'
import { Colors } from '../../../constants/styles'

export default css`
  position: absolute;
  z-index: 301;
  bottom: 0;
  height: 60px;
  width: 100%;
  border: 1px solid ${Colors.GREY};
  background-color: ${Colors.WHITE};
  display: flex;
  justify-content: center;
`