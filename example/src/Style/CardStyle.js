import { css } from 'styled-components';
import { Font, JoyTheme } from './JoyTheme'

export default css`
  border: 1px solid ${JoyTheme.TAN};
  border-radius: 8px;
  transition: 0.3s;
  margin-top: 20px;
  padding: 5px 5px 0px 5px;
  background-color: ${JoyTheme.WHITE};
  text-align:left;

  .container {
    padding: 2px 16px 0px;
    height: 76%;
    overflow-y: auto; 
    > pre {
      font-family: ${Font.DEFAULT};
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 13px;
    padding-bottom: 10px;
  }

  .header {
    border-radius: 8px 8px 0 0;
    padding: 5px 16px;
    margin: 7px 0 0 0;
    font-weight:bold;
    color: ${JoyTheme.TAN};
    .closeBtn {
      float: right;
      color: ${JoyTheme.GREY};
      cursor: pointer
    }
  }

  .optional {
    border-radius: 8px 8px 0 0;
    padding: 0px 16px 5px;
    margin: 0px 0 7px 0;
    color: ${JoyTheme.LIGHT_NAVY};
  }

  .line {
    border-bottom: 2px solid ${JoyTheme.LIGHT_GREY};
    box-shadow: 0 20px 20px -20px ${JoyTheme.GREY};
    padding: 0px 12px;
  }
` 