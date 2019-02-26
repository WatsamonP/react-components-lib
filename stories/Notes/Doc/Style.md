## :art: Style

## 1. via `props style`
- TextInputComponent
- TextareaComponent
- ButtonComponent

> or can use _styled-components_ to styled them

```js
// TextInputComponent/TextareaComponent
import styled from 'styled-components'
import { TextInputComponent, TextareaComponent } from 'react-components-lib'
import TextInputStyle from './PATH/TO/TextInputStyle'

const TextInputWithStyle = styled(TextInputComponent)`
  ${TextInputStyle};
`

const TextareaWithStyle = styled(TextareaComponent)`
  ${TextInputStyle};
  padding: 14px 20px;
  height: 250px;
  resize: none;
`

const App = () => {
  return(
    <div>
      <TextInputComponent style={{...}} />
      <TextInputWithStyle />
      <TextareaWithStyle />
    </div>
  )
}

```

```js
// ButtonComponent
import styled from 'styled-components'
import { ButtonComponent } from 'react-components-lib'
import ButtonStyle from './PATH/TO/ButtonStyle'
import MyRightIcon from './PATH/TO/MyRightIcon.svg'

const ButtonStyle = styled(ButtonComponent)`
  ${ButtonStyle};
`

const RightIconStyle = {
  'padding-left': '10px';
}

const App = () => {
  return(
    <div>
      <ButtonStyle 
        rightIcon={<MyRightIcon/>}
        rightIconStyle={RightIconStyle}
      />
    </div>
  )
}
```

<hr>

## 2. via `props styleConfig`

> props `css` as styleConfig={ myStyle }<br>
> view `className` of Components on their stories

- DropdownComponent
- PopupSearchComponent

```js
// DropdownComponent
import { DropdownComponent } from 'react-components-lib'
import DropdownStyle from './PATH/TO/DropdownStyle'

const App = () => {
  return(
    <DropdownComponent
      styleConfig={DropdownStyle}  
    />
  )
}
```

```js
// PopupSearchComponent
import { PopupSearchComponent } from 'react-components-lib'
import PopupSearchStyle from './PATH/TO/PopupSearchStyle'

const App = () => {
  return(
    <PopupSearchComponent
      styleConfig={PopupSearchStyle}  
    />
  )
}
```

<hr>

## 3. via `props theme`

> just styling with `color code` or `style object` can't change ICON<br>
> view parameter and EXAMPLE of `theme` their Components stories

- RadioComponent
- CheckboxComponent
- DatePicker

```js
// RadioComponent
import { RadioSearchComponent } from 'react-components-lib'
const RadioTheme = {
  // fill Color
  wrapperBorder: 'color',
  wrapperBackground: 'color',
  symbolColor: 'color',
  symbolStroke: 'color',
  labelColor: 'color',
  itemBorder: 'color',
  itemColor: 'color',
  active: {
    itemColor: 'color',
    labelColor: 'color',
    symbolColor: 'color',
    symbolStroke: 'color',
    checkedColor: 'color',
    checkedStroke: 'color',
  },
  disabled: {
    labelColor: 'color',
    itemColor: 'color',
    itemBorder: 'color',
    symbolStroke: 'color',
  },
  error: {
    itemColor: 'color',
    itemBorder: 'color',
    symbolStroke: 'color',
    labelColor: 'color',
  },
  labelStyle: { // Style
    'font-family': Font.DEFAULT,
    'font-size': '16px'
  }
}

const App = () => {
  return(
    <RadioSearchComponent
      theme={RadioTheme}  
    />
  )
}
```

```js
// CheckboxComponent
import { CheckboxComponent } from 'react-components-lib'
const CheckboxTheme = {
    border: 'color',
    checkColor: 'color',
    checkedColor: 'color',
    checkedStroke: 'color',
    checkedBackground: 'color',
    labelColor: 'color',
    error: {
      border: 'color',
      checkedColor: 'color',
      checkedBackground: 'color',
      labelColor: 'color',
    },
    labelStyle: { // Style
      'font-family': Font.DEFAULT,
      'font-size': '16px'
    }
  }

const App = () => {
  return(
    <CheckboxComponent
      theme={CheckboxTheme}  
    />
  )
}
```

```js
// DatePicker
import { DatePickerComponent } from 'react-components-lib'
const DatePickerTheme = {
  iconStyle: {},
  clearIconStyle: {},
  textInput: {},
  dateTitle: {}
  datePickerStyle: `css`,
  buttonWrapper: {}
}

const App = () => {
  return(
    <DatePickerComponent
      theme={DatePickerTheme}  
    />
  )
}
```