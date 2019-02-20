## :tada: Dropdown + withLabel( )

> base on [:bookmark: react-select ](https://github.com/JedWatson/react-select)
>
> [💅 styled-component ](https://www.styled-components.com/)


<details>
<summary>ex. Master data structure</summary>

```json
  "identityResources": [
    {
      "code": "11",
      "ebaoTypeId": "1",
      "ebaoTypeName": "Identity Card",
      "translations": {
        "th": {
          "label": "บัตรประจำตัวประชาชน",
          "labelPDF": "บัตรประจำตัวประชาชน"
        },
        "en": {
          "label": "Identity Card",
          "labelPDF": "Identity Card"
        }
      }
    },
    {
      "code": "12",
      "ebaoTypeId": "1",
      "ebaoTypeName": "Identity Card",
      "translations": {
        "th": {
          "label": "สูติบัตร",
          "labelPDF": "สูติบัตร"
        },
        "en": {
          "label": "Birth Certificate",
          "labelPDF": "Birth Certificate"
        }
      }
    }
  ]
```
</details>
<br>
<details>
<summary>:file_folder: DropdownStyle.js</summary>

```js
import { css } from 'styled-components'
import { JoyTheme } from './JoyTheme'
import TextInputStyle from './TextInputStyle'

export default css`
  ${TextInputStyle};
  padding-top: 2px;
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
```
</details>

## Usage

```js
import React from 'react'

```

### Handle Function

```js 
  
  handleSelectOption = (selectedOption) => {
    this.setState({ selectedIdentityResources: selectedOption })
  }

```