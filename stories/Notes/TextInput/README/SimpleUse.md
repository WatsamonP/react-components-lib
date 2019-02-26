## :tada: Simple Use + withLabel( )

> EXAMPLE to use Components on `src/example`<br>
> in `src/example` can `yarn start` to view example Application.

<details>
<summary>REGEX</summary>

```js
EMAIL_ALLOW_KEYS = /^[a-zA-Z@.\d_+-]*$/
EMAIL_VALIDATION = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```
</details>

<br>

<details>
<summary>ex. TextInputStyle</summary>

```js
import { css } from 'styled-components'
import { JoyTheme, Font } from './JoyTheme'

export default css`
  font-family: ${Font.DEFAULT};
  box-sizing: border-box;
  height: 44px;
  width: 100%;
  border: 1px solid ${JoyTheme.NAVY};
  border-radius: 8px;
  background-color: ${JoyTheme.WHITE};
  color: ${JoyTheme.NAVY};
  font-size: 16px;
  padding-left:12px;

  :focus {
    outline: none;
    border: solid 1px ${JoyTheme.TAN};
  }

  :disabled {
    color: ${JoyTheme.GREY};
    background: ${JoyTheme.LIGHT_GREY};
  }

  &.error{
    border: solid 1px ${JoyTheme.DANGER};
  }
`
```
</details>

<details>
<summary>ex. withLabelStyle</summary>

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

<details>
<summary>ex. ButtonStyle</summary>

```js
import { css } from 'styled-components'
import { JoyTheme, Font } from './JoyTheme'

export default css`
  font-family: ${Font.DEFAULT};
  font-size: 16px;
  height: 36px;
  padding:4px 12px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-weight: bold;
  background: ${JoyTheme.CREAM};
  color: ${JoyTheme.NAVY};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :disabled {
    border: 1px solid ${JoyTheme.NAVY};
    background: ${JoyTheme.LIGHT};
    color: ${JoyTheme.TAN};
    cursor: not-allowed;
  }
`
```
</details>


## Started

```js
import { TextInputComponent, withLabel, ButtonComponent } from 'react-components-lib'
import styled from 'styled-components'
import classnames from 'classnames'

import { EMAIL_ALLOW_KEYS, EMAIL_VALIDATION } from '../utils/regex'

import TextInputStyle from '../Styles/TextInputStyle'
import withLabelStyle from '../Styles/withLabelStyle'
import ButtonStyle from '../Styles/ButtonStyle'
const TextInputWithStyled = styled(TextInputComponent)`${TextInputStyle}`;
const TextInputWithLabel = withLabel(TextInputWithStyled)
const MyButton = styled(Button)`
  ${ButtonStyle};
`
```

<br>

## state
```js
state = {
  email: {
    fieldId: 'email.fieldId',
    id: { testSectionId: "emailTestSectionId", testId: "emailTestId" },
    label: "INPUT EMAIL",
    required: true,
    error: false,
    placeholder: "ex. xxxxx@mail.com",
    value: '',
    requiredMessage: 'Required Field',
    errorMessage: 'Validation Error'
  },
  status: false
}

```

## Usage

```js
render() {
  const { email } = this.state;

  const btnIsDisabled = () => (R.isEmpty(email.value) ? email.error : false)
  const btnIsError = () => (this.state.status ? <CheckedIconSvg /> : '');
  const btnIsErrorStyle = () => {
    return this.state.status ? {
      paddingLeft: '5px',
      paddingTop: '5px'
    } : {}
  };
  
  return(
    <div>
      <TextInputWithLabel
        // withLabel Option
        label={email.label}
        optionalLabel={'(if any)'}
        required={email.required}
        error={email.error}
        requiredMessage={email.requiredMessage}
        errorMessage={email.errorMessage}
        // TextInputComponent
        fieldId={email.fieldId}
        id={email.id}
        placeholder={email.placeholder}
        onChange={this.handleOnChange}
        value={email.value}
        regex={EMAIL_ALLOW_KEYS}
        className={classnames({ error: email.error })}
        // style
        wrapperStyle={withLabelStyle}
      />

      <MyButton
        label="Email Validation"
        onClick={this.handleValidation}
        disabled={btnIsDisabled()}
        rightIcon={btnIsError()}
        rightIconStyle={btnIsErrorStyle()}
      />
    </div>
  )
```

## ex. Handle Function

```js
  handleOnChange = (e) => {
    let { value } = e.target;
    let newState = { ...this.state.email, value: value };

    this.setState({ email: newState, status: false })
  }

  handleValidation = () => {
    let { email } = this.state;
    let newState = { ...this.state.email };

    if (!EMAIL_VALIDATION.test(email.value)) {
      this.setState({ status: false })
      newState = { ...newState, error: true };
    } else {
      this.setState({ status: true })
      newState = { ...newState, error: false };
    }

    this.setState({ email: newState })
  }
```