## :tada: Radio  + withLabel( ) 

> base on [AppMan: thai-samsung-life component](https://github.com/appman-agm/thai-samsung-life) 

> EXAMPLE to use Components on `src/example`<br>
> in `src/example` can `yarn start` to view example Application.



<hr>

## Prop Types
| name | type | default | description |
| :--- | :---: | :---: | :--- |
| value | object | - | will return object
| options | `array` | - | data that want to display
| onClick | `func` | - | handle Function
| currentLanguage | `string` | - | `th` or `en`
| disabled | `bool` | - | handle Disabled
| theme | `object` | - | handle Theme

### Define

<details>
<summary>:file_folder: RadioTheme</summary>

```js
const myTheme = {
  // wrapper
  wrapperBorder: color("📘 wrapperBorder", JoyTheme.NAVY),
  wrapperBackground: color("📘 wrapperBackground", JoyTheme.LIGHT),

  // item วงกลม
  symbolColor: color("📘 symbolColor", JoyTheme.WHITE),
  symbolStroke: color("📘 symbolStroke", JoyTheme.NAVY),

  labelColor: color("📘 labelColor", JoyTheme.NAVY),
  itemBorder: color("📘 itemBorder", JoyTheme.NAVY), // เส้นขั้นระหว่าง item
  itemColor: color("📘 itemColor", ''),  // ทับสี wrapperBackground

  active: {
    itemColor: color("📒 active: itemColor", JoyTheme.NAVY), // pass
    labelColor: color("📒 active: labelColor", JoyTheme.WHITE),  // pass

    symbolColor: color("📒 active: symbolColor", JoyTheme.LIGHT),
    symbolStroke: color("📒 active: symbolStroke", JoyTheme.CREAM),

    checkedColor: color("📒 active: checkedColor", JoyTheme.TAN),
    checkedStroke: color("📒 active: checkedStroke", JoyTheme.CREAM)
  },

  disabled: {
    labelColor: color("📓 disabled: labelColor", JoyTheme.GREY),
    itemColor: color("📓 disabled: itemColor", JoyTheme.LIGHT),
    itemBorder: color("📓 disabled: itemBorder", ''),
    symbolStroke: color("📓 disabled: symbolStroke", JoyTheme.GREY),
  },

  error: {
    itemColor: color("📕 error: itemColor", JoyTheme.LIGHT),
    itemBorder: color("📕 error: itemBorder", JoyTheme.DANGER),
    symbolStroke: color("📕 error: symbolStroke", JoyTheme.DANGER),
    labelColor: color("📕 error: labelColor", JoyTheme.DANGER),
  },

  labelStyle: {
    'font-family': Font.DEFAULT,
    'font-size': '16px'
  }
}
```
</details>

<br>

```js
state = {
  options: master.genders,
  selected: null,
  slectedCode: null
}
```

<hr>

### Usage

```js
  <Radio
    value={this.state.slectedCode}
    options={this.state.options}
    onClick={this.handleClick("maritialStatus")}
    currentLanguage={'th'}
    theme={myTheme}
  />

```


<hr>

### ex. Handle Function 

```js
  getValue = (code) => {
    return _.find(this.state.options, ['code', code])
  }

  handleClick = (fieldId) => (code) => {
    this.setState(
      {
        slectedCode: code,
        selected: this.getValue(code)
      }
    )
  }
```