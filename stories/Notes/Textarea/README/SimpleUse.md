## :tada: Simple Use + withLabel( )

> EXAMPLE to use Components on `src/example`<br>
> in `src/example` can `yarn start` to view example Application.

## Usage

<details>
<summary>:file_folder: TextInputStyle.js</summary>

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

```js
import styled from 'styled-components'
import { TextareaComponent, withLabel } from 'react-components-lib'
import TextInputStyle from './Styles/TextInputStyle'

  const TextareaWithStyle = styled(Textarea)`
    ${TextInputStyle};
    padding: 14px 20px;
    height: 250px;
    resize: none;
  `
  const TextareaWithLabel = withLabel(TextareaWithStyle)

  handleChange = (e) => {
    let value = e.target.value;
    // do something
  }

  <TextareaWithLabel
    fieldId={"TextareaStyle"}
    id={ testSectionId: "testSectionId", testId: "testId" }
    placeholder={'Styled Component'}
    onChange={this.handleChange}
    disabled={boolean("Disabled", false)}
    error={boolean("Error", false)}
    className={classnames({ error: false })}
    label="Hello Textarea"
    optionalLabel="(if any)"
  />
```