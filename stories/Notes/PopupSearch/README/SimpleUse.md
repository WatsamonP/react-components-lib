## :tada: Popup Search  + withLabel( ) 

> base on [:eyeglasses: react-virtualized](https://github.com/bvaughn/react-virtualized) <br>
> example **Style** see `PopupSearch > Getting Start Story`

> EXAMPLE to use Components on `src/example`<br>
> in `src/example` can `yarn start` to view example Application.


## Usage

```js
import React from 'react'
import { PopupSearchComponent, ButtonComponent, withLabel } from 'react-compoents-lib'
import master from '../utils/master.json'
// style_decorate
import { Colors } from '../Styles/Colors'
import SearchIcon from '../assets/icon/magnify-icon.svg'
import ClearIcon from '../assets/icon/cross-black-circular-button.svg'
import PopupStyle from '../Styles/PopupStyle'
import withLabelStyle from '../Styles/withLabelStyle'
import ButtonStyle from '../Styles/ButtonStyle'
const MyButton = styled(Button)`
  ${ButtonStyle}
  background-color: ${props => props.color ? props.color : ''};
  display: inline-block;
`

const WithLabelComponent = withLabel(PopupSearch)

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
  // button
  backButtonText={text('backButtonText', 'Go Back')}
  leftButtonOption={this.renderMyLeftButton}
  rightButtonOption={this.renderMyRightButton}
  // withLabelConfig
  required={true}
  label="Hello Label"
  optionalLabel="(if any)"
  requiredMessage="Hello Required"
  errorMessage="Hello Error"
  className={classnames({ error: false })}
  wrapperStyle={withLabelStyle}
/>
```

### renderButton
```js
renderMyLeftButton = () => (
  <div style={{ textAlign: 'center', display: 'block', marginTop: '7px' }}>
    <MyButton
      color={Colors.GREY}
      label="Can't CLick Me"
      style={{ marginRight: '10px' }}
      onClick={this.handleAlert}
      disabled={true}
      leftIcon={"🎉"}
    />
  </div>
)

renderMyRightButton = () => (
  <div style={{ textAlign: 'center', display: 'block', marginTop: '7px' }}>
    <MyButton
      color={Colors.PINK}
      label="Alert PINK"
      style={{ marginLeft: '10px', marginRight: '5px' }}
      onClick={() => alert("Alert PINK 😃")}
      rightIcon={"😃"}
    />
    <MyButton
      color={Colors.LIGHTBLUE}
      label="Alert LIGHT BLUE"
      style={{ marginLeft: '5px' }}
      onClick={() => alert("Alert LIGHT BLUE 😃")}
      rightIcon={"😃"}
    />
  </div>
)
```