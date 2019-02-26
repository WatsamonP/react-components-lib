## :tada: Dropdown + withLabel( )

> base on [:bookmark: react-select ](https://github.com/JedWatson/react-select)
>
> [💅 styled-component ](https://www.styled-components.com/)

> EXAMPLE to use Components on `src/example`<br>
> in `src/example` can `yarn start` to view example Application.


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
<br>
<details>
<summary>:file_folder: withLabelStyle.js</summary>

```js
import { css } from 'styled-components'
import { JoyTheme } from './JoyTheme'

export default css`
  &.error {
    color: ${JoyTheme.DANGER};
    >:nth-child(2) {
      border: 1px solid ${JoyTheme.DANGER};
    }
  }

  .label {
    color: ${JoyTheme.NAVY}
  }

  .bottomLabel {
    &.error {
      color: ${JoyTheme.DANGER};
    }
  }
`
```
</details>

## Usage

```js
import { DropdownComponent, withLabel } from 'react-components-lib'
import DropdownStyle from '../Styles/DropdownStyle'
import withLabelStyle from '../Styles/withLabelStyle'

const DropdownWithLabel = withLabel(DropdownComponent);

state = {
  identityResources: {
  label: 'Identity Resources',
  value: null,
  options: master.identityResources,
  placeholder: 'เอกสารที่ใช้แสดง',
  error: false,
  required: true,
  requiredMessage: 'Required Field',
  errorMessage: 'Hello Error',
  id: {
    testSectionId: 'testSectionId',
    testId: 'testId'
  },
}

render() {
  const { identityResources } = this.state;

  return (
    <div>
      <DropdownWithLabel
        value={identityResources.value}
        id={identityResources.id}
        options={identityResources.options}
        placeholder={identityResources.placeholder}
        onClick={this.handleSelectOption}
        currentLanguage={getCurrentLanguage()}
        styleConfig={DropdownStyle}
        disabled={false}
        className={classnames({ disabled: false })}
        // withLabel Option
        label={identityResources.label}
        optionalLabel={'(if any)'}
        required={identityResources.required}
        error={identityResources.error}
        requiredMessage={identityResources.requiredMessage}
        errorMessage={identityResources.errorMessage}
        wrapperStyle={withLabelStyle}
      />
    </div>
  )
}
```

<hr>

### Handle Function

```js 

  const getCurrentLanguage = () => ('th')
  
  handleSelectOption = (selectedOption) => {
    this.setState({ selectedIdentityResources: selectedOption })
  }

```
