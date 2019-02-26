## :tada: Simple Use + withLabel( )

> EXAMPLE to use Components on `src/example`<br>
> in `src/example` can `yarn start` to view example Application.

## Usage

```js
import styled from 'styled-components'
import { TextareaComponent } from 'react-components-lib'
import TextInputStyle from './Styles/TextInputStyle'

  const TextareaWithStyle = styled(Textarea)`
    ${TextInputStyle};
    padding: 14px 20px;
    height: 250px;
    resize: none;
  `

  handleChange = (e) => {
    let value = e.target.value;
    // do something
  }


  <TextareaWithStyle
    fieldId={"TextInputStyle"}
    id={ testSectionId: "testSectionId", testId: "testId" }
    placeholder={'Styled Component'}
    onChange={this.handleChange}
    disabled={boolean("Disabled", false)}
    error={boolean("Error", false)}
    className={classnames({ error: false })}
  />
```