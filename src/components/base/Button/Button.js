import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const LeftIcon = styled.span`
  ${props => props.config ? props.config : ''};
`

const RightIcon = styled.span`
  ${props => props.config ? props.config : ''};
`

const Label = styled.span`
  ${props => props.config ? props.config : ''};
`

const ButtonComponent = ({
  testId = {},
  label = 'label.button',
  children,
  onClick = () => null,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  style = {},
  labelStyle = {},
  leftIconStyle = {},
  rightIconStyle = {},
  ...props
}) => {
  return (
    <button
      id={`button-${testId.testSectionId}-${testId.testId}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
      {...props}>
      <LeftIcon config={leftIconStyle}>{leftIcon}</LeftIcon>
      <Label config={labelStyle}>{label || children}</Label>
      <RightIcon config={rightIconStyle}>{rightIcon}</RightIcon>
    </button>
  )
}

ButtonComponent.propTypes = {
  /** for testing testId = { testSectionId: "", testId: "" } */
  testId: PropTypes.object,
  /** to display Text on button */
  label: PropTypes.string,
  /** to display Text on button when label="" */
  children: PropTypes.string,
  /** handle Function */
  onClick: PropTypes.func,
  /** handle disabled */
  disabled: PropTypes.bool,
  /** to display ICON on left side of Text*/
  leftIcon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  /** to display ICON on right side of Text*/
  rightIcon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  /** styling component */
  style: PropTypes.object,
  /** styling label */
  labelStyle: PropTypes.object,
  /** styling left icon */
  leftIconStyle: PropTypes.object,
  /** styling left icon */
  rightIconStyle: PropTypes.object,
};

export default ButtonComponent