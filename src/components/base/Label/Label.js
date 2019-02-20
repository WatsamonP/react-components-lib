import React from 'react';

const Label = ({
  label = "label.label",
  required = false,
  optionalLabel = "label.optionalLabel",
  ...props }) => {

  return (
    <label {...props}>{label} {!required && optionalLabel}</label>
  )
}

export default Label