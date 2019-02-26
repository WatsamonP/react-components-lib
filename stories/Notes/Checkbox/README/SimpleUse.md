## :tada: Simple Use

> EXAMPLE to use Components on `src/example`<br>
> in `src/example` can `yarn start` to view example Application.

## Prop Types
| name | type | default | description |
| :--- | :---: | :---: | :--- |
| value | `bool` | - |
| label | `string` | - | label that want to display
| testId  | `object` | - |  testing testId = { testSectionId: "", testId: "" } |
| onClick | `func` | - | handle Function
| theme | `object` | - | handle Theme

#### Define
```js
import * as R from 'ramda'
import { CheckboxComponent } from 'react-components-lib'
import master from '../../../../data/master.json'
import CheckboxTheme from '../config/theme/CheckboxTheme'

state = {
  healthQues1: {
    fieldId: 'healthQues1',
    options: master.healthQues1,
    testId: {
      testId: 'testId',
      testSectionId: 'testSectionId'
    },
    value: {},
    list: [],
  }
}
```

<hr/>

#### Render()
```js
{
  this.state.healthQues1.options.map(key => (
    <div key={`healthQues1-${key.code}`}>
      <CheckboxComponent
        value={this.state.healthQues1.value[key.code]}
        label={key.translations.th.label}
        testId={this.state.testId}
        onClick={this.handleClick(key)}
        theme={CheckboxTheme}
      />
    </div>
  ))
}
```

<hr/>

#### ex. Handle Function
```js
getValue = (options, code) => (_.find(options, ['code', code]))

handleClick = (key) => (isChecked) => {
  const { fieldId, value, list, options } = this.state.healthQues1;
  let checkKey = isChecked ? true : false;
  let isAlready = this.getValue(list, key.code) ? true : false;
  let newState = {
    ...this.state.healthQues1,
    value: { ...value, [key.code]: checkKey },
    list: _.compact([
      ...list,
      isAlready ? null : this.getValue(options, key.code)
    ])
  }
  this.setState({ [fieldId]: newState })
}
```

<details>
<summary>ex. CheckboxTheme</summary>

```js
import { JoyTheme, Font } from '../../../../Style/JoyTheme'

const RadioTheme = {
  border: JoyTheme.NAVY,
  checkColor: JoyTheme.WHITE,
  checkedColor: JoyTheme.CREAM,
  checkedStroke: JoyTheme.LIGHT_NAVY,
  checkedBackground: JoyTheme.NAVY,
  labelColor: JoyTheme.NAVY,
  error: {
    border: JoyTheme.DANGER,
    checkedColor: JoyTheme.WHITE,
    checkedBackground: JoyTheme.WHITE,
    labelColor: JoyTheme.GREY,
  },
  labelStyle: {
    'font-family': Font.DEFAULT,
    'font-size': '16px'
  }
}

export default RadioTheme;
```
<details>