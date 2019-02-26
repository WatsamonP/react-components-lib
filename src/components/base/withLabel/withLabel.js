import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import Label from '../Label';
import BottomLabel from './BottomLabel';

const ComponentWrapper = styled.div`
  ${props => props.wrapperStyle ? props.wrapperStyle : ''}
`

const withLabel = Component => ({
  value,
  label,
  optionalLabel,
  className,
  componentClassName,
  error,
  testId = {},
  required,
  hideLabel,
  componentStyle,
  requiredMessage,
  errorMessage,
  wrapperStyle,
  ...props
}) => (
    <ComponentWrapper wrapperStyle={wrapperStyle}>
      <Label
        className={`label`}
        required={required}
        label={label} optionalLabel={optionalLabel} />
      <Component className={`${className}`} value={value} error={error} {...props} />
      <BottomLabel
        className={`bottomLabel ${classnames({ error })}`}
        value={value}
        required={required} requiredMessage={requiredMessage}
        error={error} errorMessage={errorMessage} />
    </ComponentWrapper>
  )

withLabel.displayName = 'withLabel'

export default withLabel