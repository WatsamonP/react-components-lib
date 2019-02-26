# react-components-lib

## Install

```bash
yarn add ...
```

## Components
- ButtonComponent
- CheckboxComponent
- DatePickerComponent
- DropdownComponent
- PopupSearchComponent
- RadioComponent
- TextareaComponent
- TextInputComponent
- withLabel

### Prop Types of Component
for each Component you can see Prop types on [![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](https://sad-hawking-0f7d4e.netlify.com)

<details>
<summary>Components Props</summary>
  TODO
</details>

<hr>

## Usage

```jsx
import React from 'react'
import styled from 'styled-components'
import TextInputStyle from './PATH/TO/TextInputStyle'

import {
  withLabel,
  TextInputComponent,
  TextareaComponent,
  ButtonComponent,
  DropdownComponent,
  PopupSearchComponent,
  RadioComponent,
  CheckboxComponent,
  DatePickerComponent,
} from 'react-components-lib'

const TextInputWithStyle = styled(TextInputComponent)`
  ${TextInputStyle}
`
const TextInputWithLabel = withLabel(TextInputWithStyle)


class Example extends React.Component {

  render () {
    return (
      <TextInputWithLabel />
    )
  }
}
```

<hr>

## Storybook

```bash
yarn storybook
```

or

> [![Storybook](https://github.com/storybooks/brand/blob/master/badge/badge-storybook.svg)](https://sad-hawking-0f7d4e.netlify.com)

#### Addons

| Panel name | |
| :---: | :--- |
| KBOB | Interactively edit component prop data in the Storybook UI |
| ACTION LOGGER | Log actions as users interact with components in the Storybook UI |
| STORY | View the code of your stories within the Storybook UI |
| TESTS | View the results of components' unit tests in Storybook |
| README |

> [_storybook doc_](https://github.com/storybooks/storybook)

<hr>

### Example App with `react-components-lib`
on `src/example`

```bash
yarn start
````
