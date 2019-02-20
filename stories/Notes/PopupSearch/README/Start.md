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

### :art: with Style


<details>
<summary>:file_folder: PopupSearchStyle.js</summary>

```js
```
</details>

<br>

<details>
<summary>:file_folder: PopupBodyStyle.js</summary>

```js
```
</details>

<br>

## Usage

```js
import React from 'react'

// TODO
```
