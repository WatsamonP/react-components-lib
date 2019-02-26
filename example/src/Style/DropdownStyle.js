import { css } from 'styled-components'
import { JoyTheme } from './JoyTheme'
import TextInputStyle from './TextInputStyle'

export default css`
  ${TextInputStyle};
  padding-top: 5px;
  &.disabled {
    background: ${JoyTheme.LIGHT_GREY};
  }  

  .react-select__control,
  .react-select__control--is-focused:hover {
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 99%;
    outline: none;
    box-shadow: none;
  }

  .react-select__single-value,
  .react-select__dropdown-indicator,
  .react-select__dropdown-indicator:hover {
    color: ${JoyTheme.NAVY};
  }

  .react-select__value-container {
    padding-left: 0px;
  }

  .react-select__indicator-separator {
    background: none;
  }

  .react-select__placeholder {
    color: ${JoyTheme.NAVY}
  }

  .react-select__option--is-focused {
    background-color: ${JoyTheme.CREAM}!important;
  }

  .react-select__option--is-selected {
    background-color: ${JoyTheme.LIGHT_NAVY};
  }

  .react-select__menu {
    left:0;
    margin-top: 10px;
  }
`