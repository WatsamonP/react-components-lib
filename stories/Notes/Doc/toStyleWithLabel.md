## :art: + :label: To style withLabel()

### TextInput/ Textarea

```js
import styled from 'styled-components'
import { TextInputComponent, withLabel } from 'react-components-lib'
import TextInputStyle from './PATH/TO/TextInputStyle'
import WithLabelStyle from './PATH/TO/WithLabelStyle'

const TextInputWithStyle = styled(TextInputComponent)`
  ${TextInputStyle}
`
const TextInputWithLabel = withLabel(TextInputWithStyle)

const App = () => {
  return(
    <TextInputWithLabel wrapperStyle={WithLabelStyle} />
  )
}

```

<hr>

### Dropdown /PopupSearch /Radio /DatePicker /...

> Dropdown + PopupSearch use `styleConfig`<br>
> Radio + DatePicker use `theme`

```js
import styled from 'styled-components'
import { DropdownComponent, RadioComponent, withLabel } from 'react-components-lib'
import DropdownStyle from './PATH/TO/DropdownStyle'
import RadioTheme from './PATH/TO/RadioTheme'
import WithLabelStyle from './PATH/TO/WithLabelStyle'

const App = () => {
  return(
    <div>
      <DropdownComponent 
        styleConfig={DropdownStyle}
        wrapperStyle={WithLabelStyle}
      />
      <RadioComponent
        theme={RadioTheme}
        wrapperStyle={WithLabelStyle} 
      />
    </div>
  )
}
```

<hr>

## Example

![Text](https://github.com/WatsamonP/react-components-lib/blob/master/stories/assets/images/config_Styled.png?raw=true)

<hr>

![Dropdown](https://github.com/WatsamonP/react-components-lib/blob/master/stories/assets/images/config_styleConfig.png?raw=true)

<hr>

![Radio](https://github.com/WatsamonP/react-components-lib/blob/master/stories/assets/images/config_theme.png?raw=true)