import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import classnames from 'classnames'

// storybook
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { LANGUAGE_LIST } from '../utils/KnobSelectList'

// component
import PopupSearch from '../../src/components/base/PopupSearch'
import withLabel from '../../src/components/base/withLabel'
import Button from '../../src/components/base/Button'

// style_decorate
import { Colors } from '../Styles/Colors'
import SearchIcon from '../assets/icon/magnify-icon.svg'
import ClearIcon from '../assets/icon/cross-black-circular-button.svg'
import PopupStyle from '../Styles/PopupStyle'
import withLabelStyle from '../Styles/withLabelStyle'
import ReturnValue from '../components/ReturnValue'
import Popup from '../components/Popup'
import PopupClassnameJpg from '../assets/images/PopupClassname.jpg'
import PopupPropsJpg from '../assets/images/PopupProps.jpg'

import ButtonStyle from '../Styles/ButtonStyle'
const MyButton = styled(Button)`
  ${ButtonStyle}
  background-color: ${props => props.color ? props.color : ''};
  display: inline-block;
`
const WithLabelComponent = withLabel(PopupSearch)

// data
import master from '../utils/master.json'
const getCurrentLanguage = () => ('th')

class PopupSearchRenderButton extends React.Component {

  state = {
    masterTitle: master.title,
    selectedTitle: {},
    columns: [{ label: "คำนำหน้าชื่อ" }]
  }

  handleClickOption = (object) => {
    this.setState({ selectedTitle: object })
  }

  handleStyle = (bool) => (bool? PopupStyle : {})

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

  render() {
    return (
      <div>
        <div style={{ paddingBottom: '20px' }}>
          <Popup title={'Style'} img={PopupClassnameJpg} img2={PopupPropsJpg} />
        </div>

        <WithLabelComponent
          // withLabelConfig
          required={boolean("Required", true)}
          error={boolean("Error", false)}
          label={text("Label", "Hello Label")}
          optionalLabel={text("OptionalLabel", '(if any)')}
          requiredMessage={text("RequiredMessage", 'Hello Required')}
          errorMessage={text("ErrorMessage", 'Hello Error')}
          className={classnames({ error: boolean("Error", false) })}
          wrapperStyle={withLabelStyle}

          // data
          columns={this.state.columns}
          options={this.state.masterTitle}
          value={this.state.selectedTitle || this.state.masterTitle[0]}
          placeholder={text('Placeholder', 'กรุณาค้นหาหรือเลือกคำนำหน้าชื่อ')}
          currentLanguage={select("CurrentLanguage", LANGUAGE_LIST, getCurrentLanguage())}
          disabled={boolean("Disabled", false)}
          onClick={this.handleClickOption}

          // style
          styleConfig={(this.handleStyle(boolean("🎨 ENABLE STYLE", true)))}
          searchIcon={<SearchIcon />}
          clearIcon={<ClearIcon />}

          // button
          disabledBackButton={boolean("disabledBackButton", false)}
          backButtonText={text('backButtonText', 'Go Back')}
          leftButtonOption={this.renderMyLeftButton}
          rightButtonOption={this.renderMyRightButton}
        />

        {!R.isEmpty(this.state.selectedTitle) &&
          <ReturnValue value={this.state.selectedTitle} />
        }
      </div>
    )
  }
}

export default PopupSearchRenderButton