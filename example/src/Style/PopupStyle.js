import { css } from 'styled-components';
import { JoyTheme } from './JoyTheme'
import PopupBodyStyle from './PopupBodyStyle'
import TextInputStyle from './TextInputStyle'
import ButtonStyle from './ButtonStyle'

export default css`

  .popupSearchInput {
    ${TextInputStyle};
    padding-left: 45px
  }

  .popUpSearchIcon {
    position: absolute;
    color: ${JoyTheme.LIGHT_NAVY};
    font-size: 23px;
    left: calc(50% - 0.5em);
    padding-top: 7px;
    padding-left: 32px;
  }

  /* **********************************************/

  .popupTextInput {
    ${TextInputStyle}
    padding-left: 40px;
  }

  .popupWrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${JoyTheme.WHITE};
    z-index: 300;
  }
  
  .popupHeader {
    position: relative;
    margin: 10px 20px;
  }
  .popupBody {
    ${PopupBodyStyle}
  }
  
  .popupFooter {
    position: absolute;
    z-index: 301;
    bottom: 0;
    height: 50px;
    width: 100%;
    border: 1px solid ${JoyTheme.GREY};
    background-color: ${JoyTheme.WHITE};
    display: flex;
    justify-content: center;
  }

  .popupButton {
    ${ButtonStyle}
    margin-top:7px;
  }

  .popupIcon {
    position: absolute;
    left: 0;
    padding-left: 14px;
    padding-top: 7px;
    color: ${JoyTheme.LIGHT_NAVY};
    font-size: 23px;
  }

  .popupClearIcon {
    position: absolute;
    cursor: pointer;
    left: auto;
    right: 4px;
    z-index: 10;
    font-size: 20px;
    color: ${JoyTheme.GREY};
    padding-top: 7px;
    font-size: 23px;
  }
`