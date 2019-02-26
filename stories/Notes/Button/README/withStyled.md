## 💅 Button + styled-component 

> [< 💅 styled-component />](https://www.styled-components.com/)

```js
import styled from 'styled-components'
import { ButtonComponent } from 'react-components-lib'
import ButtonStyle from './Styles/ButtonStyle'

const ButtonWithStyle = styled(ButtonComponent)`
  ${ButtonStyle}
`

<ButtonWithStyle
  onClick={this.handleClick}
  label="Button + StyledComponents"
  rightIcon="💅"
  rightIconStyle={{paddingLeft: '10px'}}
/>

```

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