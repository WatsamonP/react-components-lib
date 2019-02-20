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
  id,
  fieldId,
  autoComplete = 'off',
  type = 'text',
  disabled = false,
  error = false,
  maxLength = 255,
  placeholder = 'placeholder.textInput',
  mask = null,
  maskChar = null,
  ...props
}) => {
  return (
    <InputMask
      id={`text-input-${id}`}
      name={fieldId}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      disabled={disabled}
      error={error}
      mask={mask}
      maskChar={mask ? null : maskChar}
      alwaysShowMask={false}
      onChange={props.onChange}
      onKeyPress={onKeyPress({ ...props })}
      maxLength={mask ? null : maxLength}
      style={props.style}
      {...props} />
  )
}

TextInputComponent.propTypes = {
  /** Description of prop "fieldId". */
  fieldId: PropTypes.string,
  /** Description of prop "id". */
  id: PropTypes.string,
  /** Description of prop "autoComplete". */
  autoComplete: PropTypes.string,
  /** Description of prop "type". */
  type: PropTypes.string,
  /** Description of prop "placeholder". */
  placeholder: PropTypes.string,
  /** Description of prop "mask". */
  mask: PropTypes.string,
  /** Description of prop "maskChar". */
  maskChar: PropTypes.string,
  /** Description of prop "disabled". */
  disabled: PropTypes.bool,
  /** Description of prop "error". */
  error: PropTypes.bool,
  /** Description of prop "onChange". */
  onChange: PropTypes.func,
  /** Description of prop "onKeyPress". */
  onKeyPress: PropTypes.func,
  /** Description of prop "maxLength". */
  maxLength: PropTypes.number,
  /** Description of prop "regex". */
  regex: PropTypes.object,
  /** Description of prop "style". */
  style: PropTypes.object
};

export default TextInputComponent