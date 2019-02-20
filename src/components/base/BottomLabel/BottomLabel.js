import React from 'react';
import * as R from 'ramda'

const getErrorMessage = (value, requiredMessage, errorMessage) => {
  return (R.isEmpty(value) ||  R.isNil(value)) ? requiredMessage : errorMessage;
}

const BottomLabel = ({
  required = false,
  error = false,
  errorMessage = 'bottomLabel.error.errorMessage',
  requiredMessage = 'bottomLabel.error.requiredMessage',
  value = '',
  ...props }) => {

  return (
    <div {...props}>
      {required && error ? getErrorMessage(value, requiredMessage, errorMessage) : ''}
    </div>
  )
}



export default BottomLabel