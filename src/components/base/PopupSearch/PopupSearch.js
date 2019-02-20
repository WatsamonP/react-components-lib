import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import Popup from './Popup'
import * as R from 'ramda'
//
// TODO
// import TextInput ที่ทำมาใช้
// Icon + ClearIcon
// Table -> กว้างยาว
// Row

const Icon = styled.i` 
`

const Input = styled.input`
  ${props => props.styled || ``}    
`

const Wrapper = styled.div`
  ${props => props.styleConfig || ``};
`

class PopupSearch extends React.PureComponent {

  state = { isOpen: false }

  handlePopup = () => {
    if (window.cordova && window.bridging) {
      const { setValue = R.identity, popupSearch, disabled = false, currentLanguage } = this.props
      const popupTitle = i18next.t(`${popupSearch.title[0]}`)
      const value = R.pathOr({}, ['value'], this.props)
      const list = filterList(this.props)

      if (!disabled) {
        window.bridging.callEvent(
          'openCommonList',
          {
            language: currentLanguage,
            title: popupTitle,
            data: list,
            value: R.defaultTo({})(value),
          },
          (r) => {
            setValue(r)
          },
          (e) => {
            console.log(e)
          }
        )
      }
    } else if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }
  }

  render() {
    const {
      styleConfig = {},
      placeholder = 'placeholder.popupSearch',
      searchIcon,
      currentLanguage,
      disabled = false
    } = this.props

    const value = R.pathOr('', ['translations', currentLanguage, 'label'], this.props.value)

    return (
      <React.Fragment>
        <Wrapper styleConfig={styleConfig}>
          {
            this.state.isOpen && <Popup handlePopup={this.handlePopup} {...this.props} />
          }
          <Input
            className={`popupSearchInput`}
            disabled={disabled}
            type="text"
            placeholder={placeholder}
            // TO DO
            readOnly
            value={value}
            onClick={this.handlePopup}
          />
          <Icon className={`popUpSearchIcon`}>{searchIcon}</Icon>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default PopupSearch