import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import classnames from 'classnames'
import { Colors } from '../../../Style/constants'
import Responsive from '../../../Style/Responsive'
import { Label2 } from '../../Typography/Typography'
// import RadioChecked from '../../../assets/icon/radio-checked.svg'
import RadioChecked from './RadioIcon'
import PropTypes from 'prop-types'

const Wrapper = styled.ul`
  min-height: 56px;
  width: 100%;
  background-color: ${props => props.theme.wrapperBackground ? props.theme.wrapperBackground : Colors.WHITE};
  border: 1px solid ${props => props.theme.wrapperBorder ? props.theme.wrapperBorder : Colors.SILVER_SAND};
  border-radius: 6px;
  display: flex;
  list-style: none;
  padding: 0;

  &.error {
    border: 1px solid ${props => props.theme.error && props.theme.error.itemBorder ? props.theme.error.itemBorder : Colors.CINNABAR};
    > li {
      color: ${props => props.theme.error && props.theme.error.labelColor ? props.theme.error.labelColor : Colors.CINNABAR};
      background-color: ${props => props.theme.error && props.theme.error.itemColor ? props.theme.error.itemColor : ''};
      border-right: solid 1px ${props => props.theme.error && props.theme.error.itemBorder ? props.theme.error.itemBorder : Colors.CINNABAR};
      svg {
        #symbols{
          stroke: ${props => props.theme.error && props.theme.error.symbolStroke ? props.theme.error.symbolStroke : Colors.CINNABAR};
        }
      }
      &:last-child {
        border-right: initial;
      }
    }
  }
  ${Responsive('&')} &.vertical {
    height: initial;
    background-color: transparent;
    border: none;
    flex-direction: column;
    > li {
      min-height: 56px;
      background-color: ${props => props.theme.wrapperBackground ? props.theme.wrapperBackground : Colors.WHITE};
      border: 1px solid ${props => props.theme.wrapperBorder ? props.theme.wrapperBorder : Colors.SILVER_SAND};
      border-radius: 6px;
      margin-bottom: 15px;
      box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);
    }
    > li.active {
      background-color: ${props => props.theme.active && props.theme.active.itemColor ? props.theme.active.itemColor : Colors.FUN_BLUE};
    }
    &.error {
      border: none!important;
      > li {
        border: solid 1px ${props => props.theme.error && props.theme.error.itemBorder ? props.theme.error.itemBorder : Colors.CINNABAR};
      }
    }
  }
  ${props => props.theme.wrapperStyle ? props.theme.wrapperStyle : ''};
`



const Item = styled.li`
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.labelColor ? props.theme.labelColor : ''};
  background-color: ${props => props.theme.itemColor ? props.theme.itemColor : ''};
  border-right: solid 1px ${props => props.theme.itemBorder ? props.theme.itemBorder : Colors.SILVER_SAND};

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &:last-child {
    border-right: initial;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  svg {
    position: absolute;
    left: 20px;
    #radio-checked {
      > path {
        display: none;
      }
    }
    #symbols {
      fill: ${props => props.theme.symbolColor ? props.theme.symbolColor : Colors.WHITE};
      stroke: ${props => props.theme.symbolStroke ? props.theme.symbolStroke : ''};
    }
  }
  &.active {
    background-color: ${props => props.theme.active && props.theme.active.itemColor ? props.theme.active.itemColor : Colors.FUN_BLUE};
    color: ${props => props.theme.active && props.theme.active.labelColor ? props.theme.active.labelColor : Colors.WHITE};
    svg {
      #radio-checked {
        > path {
          display: block;
        }
      }
      #Shape {
        fill: ${props => props.theme.active && props.theme.active.checkedColor ? props.theme.active.checkedColor : ''};
        stroke: ${props => props.theme.active && props.theme.active.checkedStroke ? props.theme.active.checkedStroke : ''};
      }
      #symbols {
        fill: ${props => props.theme.active && props.theme.active.symbolColor ? props.theme.active.symbolColor : ''};
        stroke: ${props => props.theme.active && props.theme.active.symbolStroke ? props.theme.active.symbolStroke : Colors.SILVER_SAND};
      }
    }
  }
  &.disabled {
    border: solid 1px ${props => props.theme.disabled && props.theme.disabled.itemBorder ? props.theme.disabled.itemBorder : ''};
    > li {
      border-right: solid 1px ${props => props.theme.disabled && props.theme.disabled.itemBorder ? props.theme.disabled.itemBorder : ''};
    }
    svg {
      #symbols {
        stroke: ${props => props.theme.disabled && props.theme.disabled.symbolStroke ? props.theme.disabled.symbolStroke : ''};
      }
    }
    background-color: ${props => props.theme.disabled && props.theme.disabled.itemColor ? props.theme.disabled.itemColor : ''};
    color: ${props => props.theme.disabled && props.theme.disabled.labelColor ? props.theme.disabled.labelColor : Colors.HIT_GRAY};
  }
`

const Label = styled(Label2)`
  line-height: 25px;
  margin: 10px 30px 10px 75px;
  border: none !important;
  ${props => props.theme.labelStyle ? props.theme.labelStyle : ''};
`

export const RadioComponent = ({
  options = [],
  onClick = () => { },
  className,
  testId = {},
  fieldId,
  disabled = false,
  value,
  vertical = false,
  style,
  error,
  currentLanguage,
  theme = {},
}) => {
  const handleChange = code => () => {
    if (!disabled) {
      onClick(code)
    }
  }

  return (
    <Wrapper
      style={style} theme={theme}
      className={`${className || ''} ${classnames({ vertical })} ${classnames({ error })}`}
      testId={`choice-${testId.testSectionId}-${testId.testId}`}
    >
      {options.map(({ code, translations = {} }) => (
        <Item
          testId={`choice-${testId.testSectionId}-${testId.testId}-${code}`}
          key={`select-${fieldId}-${code}`}
          className={classnames({ disabled, active: code == value })}
          theme={theme}
          onClick={handleChange(code)}
          value={code}
        >
          <RadioChecked />
          <Label theme={theme}>{R.path([currentLanguage, 'label'], translations)}</Label>
        </Item>
      ))}
    </Wrapper>
  )
}

RadioComponent.propTypes = {
  /** data that need to display */
  options: PropTypes.array,
  /** for testing testId = { testSectionId: "", testId: "" } */
  testId: PropTypes.object,
  /** handle Function */
  onClick: PropTypes.func,
  /**  */
  disabled: PropTypes.bool,
  /** to handle theme */
  theme: PropTypes.object,
  /** code of data*/
  value: PropTypes.string,
  /**  */
  vertical: PropTypes.bool,
}

export default RadioComponent
