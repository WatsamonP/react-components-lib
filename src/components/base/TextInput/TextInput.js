import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'

const KeyCode = { BACKSPACE: 8 }

export const onKeyPress = ({ regex }) => (e) => {
  if (!regex) {
    return true
  }

  const keyCode = e.which ? e.which : window.e.keyCode
  const keyChar = String.fromCharCode(keyCode)
  /**
   * Can put keyboard to input text
   * - when press 'Backspace'
   * - when character match Regex
   */
  if (keyCode === KeyCode.BACKSPACE || regex.test(keyChar)) {
    return true
  }

  e.preventDefault()
  return false
}

const TextInputComponent = ({
  testId = {},
  fieldId,
  autoComplete = 'off',
  type = 'text',
  disabled = false,
  error,
  maxLength = 255,
  placeholder = 'placeholder.textInput',
  mask,
  maskChar = null,
  ...props
}) => {
  return (
    <InputMask
      id={`text-input-${testId.testSectionId}-${testId.testId}`}
      name={fieldId}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      disabled={disabled}
      mask={mask}
      maskChar={mask ? null : maskChar}
      alwaysShowMask={false}
      onChange={props.onChange}
      onKeyPress={onKeyPress({ ...props })}
      maxLength={mask ? null : maxLength}
      style={props.style}
      {...props}
    />
  )
}

TextInputComponent.propTypes = {
  /** to fill <input name={fieldId} /> */
  fieldId: PropTypes.string,
  /** for testing testId = { testSectionId: "", testId: "" } */
  testId: PropTypes.object,
  /**  */
  autoComplete: PropTypes.string,
  /** to define type of <input /> */
  type: PropTypes.string,
  /** placeholder */
  placeholder: PropTypes.string,
  /** react-input-mask option */
  mask: PropTypes.string,
  /** react-input-mask option */
  maskChar: PropTypes.string,
  /** handle disabled */
  disabled: PropTypes.bool,
  /** handle Function */
  onChange: PropTypes.func,
  /** define max length */
  maxLength: PropTypes.number,
  /** define REGEX when onKeyPress (not onChange) */
  regex: PropTypes.object,
  /** styling component */
  style: PropTypes.object
};

export default TextInputComponent