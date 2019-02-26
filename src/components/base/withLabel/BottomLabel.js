import React from 'react';
import * as R from 'ramda'

export const getErrorMessage = (value, requiredMessage = 'bottomLabel.error.requiredMessage', errorMessage = 'bottomLabel.error.errorMessage') => {
  return (R.isEmpty(value) || R.isNil(value)) ? requiredMessage : errorMessage;
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