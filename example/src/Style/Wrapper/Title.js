import { css } from 'styled-components';
import { JoyTheme } from '../../Style/JoyTheme'

export default css`
  margin: 20px;
  display: flex;
  justify-content: space-between;

  .left{
    font-size:30px;
    font-weight:bold;
    color: ${JoyTheme.NAVY};
  }
  
  .right{
  }
`