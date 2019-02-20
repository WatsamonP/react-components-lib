import React from 'react'

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
  autoComplete="off" ,
  testId = {},
  type = "text",
  disabled = false,
  maxLength = 255,
  error = false,
  placeholder = 'placeHolder.textarea',
  ...props
}) => {
  return (
    <textarea
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onChange={props.onChange}
      onKeyPress={onKeyPress({ ...props })}
      maxLength={maxLength}
      {...props} />
  )
}

export default TextInputComponent