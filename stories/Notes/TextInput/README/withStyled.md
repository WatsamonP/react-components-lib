## 💅 TextInput + styled-component 

> [< 💅 styled-component />](https://www.styled-components.com/)


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

## Usage

```js
import { TextInputComponent } from 'react-components-lib'
import styled from 'styled-components'

const TextInputStyled = styled(TextInputComponent)`
  ${TextInputStyle}
`

handleChange = (e) => {
  // do something
}

return(
  <TextInputStyled
    fieldId={text("Field ID (name)", "TextInputStyle")}
    type={'text'}
    placeholder={'Styled Component'}
    onChange={this.handleChange}
  />
)

```