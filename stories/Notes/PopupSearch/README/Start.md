## :star: Getting Start (:mag: PopupSearch)


> base on [:eyeglasses: react-virtualized](https://github.com/bvaughn/react-virtualized) <br>
> example to use with **Style** `see below Table`

### Prop Types

| name                        | type   | default | description |
| :---                        | :---:  | :---: | :--- |
| id                          | object | { } | for testing
| filedId ?                   | ????   | 
| columns                     | -      | [ { label: 'popupSearch.title.default' } ]
| options                     | array  | [ ] | ex. data from **master data**
| value                       | object | { }
| placeholder                 | string | _'placeholder.popupSearch'_
| currentLanguage **`required`**  | string | - | masterData language 'th' or 'en'
| disabled                    | bool   | _false_
| onClick                     | func   | - | handle function
| **Table Config**
| tableConfig | object | see Default **`Table Config`** below Table
| cache       | **`CellMeasurerCache()`** | see Default **`CellMeasurerCache Config`** below Table |
| **Button**                   
| disabledBackButton | bool   | _false_ | display Backbutton 
| backButtonText     | string | _'Back'_
| leftButtonOption   | func   | - | render function on Left Side of _Back Button_
| rightButtonOption  | func   | - | render function on Right Side of _Back Button_
| **Style**          
| styleConfig        | _css_  | see **`PopupStyle.js`**
| searchIcon         | string or object | - |
| clearIcon          | string or object | _'Clear'_ | 


<details>
<summary>Default tableConfig  |  object</summary>

```js
tableConfig = {
  width: 1200,
  height: 800,
  headerHeight: 100
}
```
</details>


<details>
<summary>Default CellMeasurerCache( )  |  react-virtualized</summary>

```js
import { CellMeasurerCache } from 'react-virtualized'

const cache = new CellMeasurerCache({
  defaultHeight: 40,
  fixedWidth: true,
})
```
</details>

---

### :art: Styling


<details>
<summary>:file_folder: PopupSearchStyle.js</summary>

```js
import { css } from 'styled-components';
import { JoyTheme } from './JoyTheme'
import PopupBodyStyle from './PopupBodyStyle'
import TextInputStyle from './TextInputStyle'
import ButtonStyle from './ButtonStyle'

export default css`

  .popupSearchInput {
    ${TextInputStyle};
    padding-left: 45px
  }

  .popUpSearchIcon {
    position: absolute;
    left: 55px;
    padding-top: 12px;
    #Shape {
      fill: ${JoyTheme.NAVY}
    }
  }

  .popupTextInput {
    ${TextInputStyle}
    padding-left: 40px;
  }

  .popupWrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${JoyTheme.WHITE};
    z-index: 300;
  }
  
  .popupHeader {
    position: relative;
    margin: 10px 20px;
  }
  .popupBody {
    ${PopupBodyStyle}
  }
  
  .popupFooter {
    position: absolute;
    z-index: 301;
    bottom: 0;
    height: 50px;
    width: 100%;
    border: 1px solid ${JoyTheme.GREY};
    background-color: ${JoyTheme.WHITE};
    display: flex;
    justify-content: center;
  }

  .popupButton {
    ${ButtonStyle}
    margin-top:7px;
  }

  .popupIcon {
    position: absolute;
    left: 0;
    padding-left: 14px;
    padding-top: 12px;
    #Shape {
      fill: ${JoyTheme.NAVY}
    }
  }

  .popupClearIcon {
    position: absolute;
    cursor: pointer;
    left: auto;
    right: 4px;
    z-index: 10;
    font-size: 20px;
    color: ${JoyTheme.GREY};
    padding-top: 11px;
  }
`
```
</details>

<br>

<details>
<summary>:file_folder: PopupBodyStyle.js</summary>

```js
import { css } from 'styled-components'
import { JoyTheme } from './JoyTheme'

export default css`
  .ReactVirtualized__Table__headerRow {
    width: 100%!important;
    height: calc(100% - 100px)!important;
    position: absolute!important;
  }

  .ReactVirtualized__Table__Grid {
    /* overflow-y:hidden!important; */
    width: 100%!important;
    height: calc(100% - 50px)!important;
    position: absolute!important;
    top: 118px;
  }

  .ReactVirtualized__Grid__innerScrollContainer {
    max-width: 100%!important;
  }

  .ReactVirtualized__Table__rowColumn {
    width: 100%!important;
  }

  .ReactVirtualized__Table__row {
    width: 100%!important;
    text-align: left;
  }

  .table-header {
    height: 40px;
    width: 100%;
    display: flex;
    color: ${JoyTheme.CREAM};
    background-color: ${JoyTheme.NAVY}; 
    padding-top: 14px;
  }

  .table-row {
    min-height: 40px;
    width: 100%!important;
    display: table;
    padding-right: 0!important;
    border: 1px solid ${JoyTheme.CREAM};

    .row {
      padding: 8px 36px!important;

      :hover {
        color: ${JoyTheme.NAVY};
        background-color: ${JoyTheme.LIGHT};
        cursor: pointer;
      }
    }

    .row.active {
      background-color: ${JoyTheme.CREAM}
    }
  }
`
```
</details>

<br>

## Usage

```js
import React from 'react'
import { PopupSearchComponent } from 'react-compoents-lib'
import SearchIcon from '../assets/icon/magnify-icon.svg'
import ClearIcon from '../assets/icon/cross-black-circular-button.svg'
import PopupStyle from '../Styles/PopupStyle'

state = {
  displayStyled: true,
  masterTitle: master.title,
  selectedTitle: {},
  columns: [{ label: "คำนำหน้าชื่อ" }]
}

getCurrentLanguage = () => ('th')

handleClickOption = (object) => {
  this.setState({ selectedTitle: object })
}

<PopupSearchComponent
  // data
  columns={this.state.columns}
  options={this.state.masterTitle}
  value={this.state.selectedTitle || this.state.masterTitle[0]}
  placeholder='กรุณาค้นหาหรือเลือกคำนำหน้าชื่อ'
  currentLanguage={this.getCurrentLanguage()}
  onClick={this.handleClickOption}
  //style
  styleConfig={PopupStyle}
  searchIcon={<SearchIcon />}
  clearIcon={<ClearIcon />}
/>
```
