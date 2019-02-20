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
  id,
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
      id={`button-${id}`}
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
  label: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  style: PropTypes.object,
  labelStyle: PropTypes.object,
  leftIconStyle: PropTypes.object,
  rightIconStyle: PropTypes.object,
};

export default ButtonComponent