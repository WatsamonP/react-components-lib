import { css } from 'styled-components';
import { JoyTheme } from '../../Style/JoyTheme'

export default css`
  margin: 5px 20px 0px 20px;
  display: flex;
  justify-content: space-between;

  .left {
    color: ${JoyTheme.NAVY};
  }
  
  .right {
    top: 50px;
  }
`