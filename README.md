# react-components-lib

> 

[![NPM](https://img.shields.io/npm/v/react-components-lib.svg)](https://www.npmjs.com/package/react-components-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-components-lib
```

## Components
- ButtonComponent
- CheckboxComponent `just styling`
- DatePickerComponent `just styling`
- DropdownComponent
- PopupSearchComponent
- RadioComponent `just styling`
- TextareaComponent
- TextInputComponent
- withLabel

### Prop Types of Component
for each Component you can see Prop types on **storybook**, run `yarn storybook`
<details>
<summary>Summary Prop Type of Components</summary>
  TODO
</details>

<hr>

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-components-lib'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```


## Storybook



```
yarn storybook
```


#### Addons

| Panel name | |
| :---: | :--- |
| KBOB | Interactively edit component prop data in the Storybook UI |
| ACTION LOGGER | Log actions as users interact with components in the Storybook UI |
| STORY | View the code of your stories within the Storybook UI |
| TESTS | View the results of components' unit tests in Storybook |
| README |

> [storybook](https://github.com/storybooks/storybook)

<br>

### Example App with `react-components-lib`
on `src/example`

```
yarn start
````
