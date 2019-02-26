import React from 'react'
import PropTypes from 'prop-types'

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

const TextareaComponent = ({
  autoComplete = "off",
  testId = {},
  type = "text",
  disabled = false,
  maxLength = 255,
  error,
  placeholder = 'placeHolder.textarea',
  ...props
}) => {
  return (
    <textarea
      type={type}
      id={`text-${testId.testSectionId}-${testId.testId}`}
      placeholder={placeholder}
      disabled={disabled}
      onChange={props.onChange}
      onKeyPress={onKeyPress({ ...props })}
      maxLength={maxLength}
      {...props} 
      />
  )
}

TextareaComponent.propTypes = {
  /** */
  autoComplete: PropTypes.bool,
  /** for testing testId = { testSectionId: "", testId: "" } */
  testId: PropTypes.object,
  /** to define type of <input /> */
  type: PropTypes.string,
  /** handle disabled */
  disabled: PropTypes.bool,
  /** define max length */
  maxLength: PropTypes.number,
  /** placeholder */
  placeholder: PropTypes.string
}

export default TextareaComponent