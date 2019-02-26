import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
// style
// import CheckedIcon from '../../../assets/icon/checked.svg'
import CheckedIcon from './CheckedSvg'
import { Colors } from '../../../Style/constants'
import { Label2 } from '../../Typography/Typography'

const CheckboxContainer = styled.div`
  display: flex;
`

const IconWrapper = styled.i`
  height: 36px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.border ? props.theme.border : Colors.SILVER_SAND};
  border-radius: 10px;
  svg {
    #Shape {
      fill: ${props => props.theme.checkColor ? props.theme.checkColor : 'white'};
    }
  }

  &.checked {
    border: none;

    svg{
      #Shape {
        fill: ${props => props.theme.checkedColor ? props.theme.checkedColor : 'white'};
        stroke: ${props => props.theme.checkedStroke ? props.theme.checkedStroke : ''};
      }
    
      #Rectangle {
        fill: ${props => props.theme.checkedBackground ? props.theme.checkedBackground : Colors.FUN_BLUE};
      }
    }
  }
  &.error {
    border: 1px solid ${props => props.theme.error && props.theme.error.border ? props.theme.error.border : Colors.CINNABAR};
    
    svg{
      #Shape {
        fill: ${props => props.theme.error && props.theme.error.checkedColor ? props.theme.error.checkedColor : ''};
      }
    
      #Rectangle {
        fill: ${props => props.theme.error && props.theme.error.checkedBackground ? props.theme.error.checkedBackground : ''};
      }
    }
  }
  
`

const Icon = styled(CheckedIcon)`
  border: 1px solid ${props => props.theme.border ? props.theme.border : Colors.SILVER_SAND};
  border-radius: 10px;
  #Shape {
    fill: ${props => props.theme.checkColor ? props.theme.checkColor : 'white'};
  }

  &.checked {
    border: none;

    #Shape {
      fill: ${props => props.theme.checkedColor ? props.theme.checkedColor : 'white'};
      stroke: ${props => props.theme.checkedStroke ? props.theme.checkedStroke : ''};
    }

    #Rectangle {
      fill: ${props => props.theme.checkedBackground ? props.theme.checkedBackground : Colors.FUN_BLUE};
    }
  }
  &.error {
    border: 1px solid ${props => props.theme.error && props.theme.error.border ? props.theme.error.border : Colors.CINNABAR};
  
    #Shape {
      fill: ${props => props.theme.error && props.theme.error.checkedColor ? props.theme.error.checkedColor : ''};
    }
  
    #Rectangle {
      fill: ${props => props.theme.error && props.theme.error.checkedBackground ? props.theme.error.checkedBackground : ''};
    }
  }
`

const TitleComponent = styled(Label2)`
  ${props => props.theme.labelStyle ? props.theme.labelStyle : ''};
  color: ${props => props.theme.labelColor ? props.theme.labelColor : ''};
  margin-left: 12px;
  line-height: 36px;
  &.error {
    color: ${props => props.theme.error && props.theme.error.labelColor ? props.theme.error.labelColor : ''};
  }
`

const CheckboxIcon = ({
  onClick,
  label,
  className,
  checked,
  testId = {},
  optionValue,
  error,
  theme
}) => (
    <CheckboxContainer>
      <IconWrapper
        theme={theme}
        onClick={onClick}
        testId={`checkbox-${testId.testSectionId}-${testId.testId}-${optionValue}`}
        className={`${className} ${classnames({ checked })} ${classnames({ error })}`}
      >
        <CheckedIcon />
      </IconWrapper>
      <TitleComponent className={`${classnames({ error })}`} theme={theme}>{label}</TitleComponent>
    </CheckboxContainer >
  )

export default CheckboxIcon
