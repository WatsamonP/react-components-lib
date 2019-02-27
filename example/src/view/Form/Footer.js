import React from 'react'
import styled from 'styled-components'
import { JoyTheme } from '../../Style/JoyTheme'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: ${props => props.color || JoyTheme.CREAM};  
`

export const Left = styled.div`
  float: left;
`

export const Right = styled.div`
  float:right;
  ${props => props.styleConfig || ''};
`

export const Footer = ({ left, right, rightStyle, color }) => {
  return (
    <Wrapper color={color}>
      <Left>
        {left}
      </Left>
      <Right styleConfig={rightStyle}>
        {right}
      </Right>


    </Wrapper>
  )
}

export default Footer;