## :star: Getting Start

```js
import { TextareaComponent } from 'react-components-lib'

  handleChange = (e) => {
    let value = e.target.value;
    // do something
  }

  <TextareaComponent
    fieldId="Getting_Start"
    id={ testSectionId: "testSectionId", testId: "testId" }
    placeholder="Getting Start"
    onChange={this.handleChange}
    style={object("Style", { backgroundColor: 'pink' })}
  />
```