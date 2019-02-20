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
    left: 55px;
    padding-top: 12px;
    #Shape {
      fill: ${JoyTheme.NAVY}
    }
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
    padding-top: 12px;
    #Shape {
      fill: ${JoyTheme.NAVY}
    }
  }

  .popupClearIcon {
    position: absolute;
    cursor: pointer;
    left: auto;
    right: 4px;
    z-index: 10;
    font-size: 20px;
    color: ${JoyTheme.GREY};
    padding-top: 11px;
  }
`