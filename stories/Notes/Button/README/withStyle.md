## :art: Button + Style

```js
import { ButtonComponent } from 'react-components-lib'

import CheckedIconSvg from './assets/icon/checked-icon.svg'

const simpleStyle = {
  fontSize: "16px",
  height: "36px",
  padding: "4px 12px",
  borderRadius: "8px",
  outline: "none",
  border: "none",
  fontWeight: "bold",
}

<ButtonComponent
  onClick={this.handleClick}
  label="Button + style"
  leftIcon={<CheckedIcon />}
  style={simpleStyle}
  leftIconStyle={{paddingRight: '10px'}}
/>
```