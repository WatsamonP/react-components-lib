## :star: Getting Start

```js
import { TextInputComponent } from 'react-components-lib'


  handleOnChange = (e) => {
    const value = e.target.value;
    console.log(value)
  }

  return(
    <TextInput
      fieldId="Getting_Start"
      placeholder="Getting Start"
      onChange={this.handleOnChange}
      style={{ backgroundColor: 'pink' }}
    />)

```