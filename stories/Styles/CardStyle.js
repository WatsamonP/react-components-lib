import { css } from 'styled-components';
import { Font, JoyTheme } from './JoyTheme'

export default css`
  border: 1px solid ${JoyTheme.TAN};
  border-radius: 8px;
  transition: 0.3s;
  margin-top: 20px;
  padding: 5px;
  background-color: ${JoyTheme.WHITE};
  text-align:left;
  :hover {
    /* box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); */
  }

  .container {
    padding: 2px 16px 10px;
    > pre {
      font-family: ${Font.DEFAULT};
    }
  }

  .header {
    border-radius: 8px 8px 0 0;
    padding: 5px 16px;
    margin: 7px 0 0 0;
    font-weight:bold;
    color: ${JoyTheme.TAN};
  }

  .optional {
    border-radius: 8px 8px 0 0;
    padding: 0px 16px 5px;
    margin: 0px 0 7px 0;
    color: ${JoyTheme.LIGHT_NAVY};
  }

  .line {
    border-bottom: 1px solid ${JoyTheme.GREY};
    padding: 0px 16px;
  }
` 