## :japanese_ogre: with Mask

> [:memo: react-input-mask ](https://github.com/sanniassin/react-input-mask)
>
> [:memo: react-input-mask Demo ](http://sanniassin.github.io/react-input-mask/demo.html)

## Usage

```js
import { TextInputComponent } from 'react-components-lib'

handleChange = (e) => {
  // do something
}

return(
  <TextInput
    fieldId="textInputWithMask"
    placeholder="X XXXXX XXXX XX X"
    mask={"9 99999 9999 99 9"}
    maskChar={" "}
    onChange={this.handleChange}
  />  
)

```