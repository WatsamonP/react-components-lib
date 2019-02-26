import React from 'react'
import styled from 'styled-components'
import SwitchLang from './SwitchLang'
import { Left, Right } from './Footer'
import { JoyTheme } from '../../Style/JoyTheme'

const HeaderWrapper = styled.div`
  z-index: 98;
  position: fixed;
  left:0;
  top:0;
  width:100%;
  height:50px;
  background: ${JoyTheme.NAVY};
  justify-content: space-between; 
`

const Toggle = styled.button`
  z-index: 100;
  margin-left: ${props => props.isOpen ? `0px` : '200px'};
  transition: 0.5s;
  cursor: pointer;
  background-color: Transparent;
  border: none;
  overflow: hidden;
  outline:none;
  color: ${JoyTheme.WHITE};
  font-size:30px;
`

const Header = ({ handleClickToggle, isOpen }) => {
  return (
    <HeaderWrapper>
      <Left>
        <Toggle onClick={handleClickToggle} isOpen={isOpen}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </Toggle>
      </Left>
      <Right>
        <div style={{ paddingTop: '6px' }}>
          <SwitchLang />
        </div>
      </Right>
    </HeaderWrapper>
  )
}

export default Header