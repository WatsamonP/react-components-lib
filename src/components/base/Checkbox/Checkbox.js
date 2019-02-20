import React from 'react'
import styled from 'styled-components'
import CheckboxIcon from './CheckboxIcon'

const CheckboxWrapper = styled.div`
  display: inline-block;
  border: none !important;
  padding-top: 10px;
`

class Checkbox extends React.PureComponent {
  handleCheck = () => {
    const { onClick = () => { }, value = undefined, optionValue = true } = this.props
    const isChecked = value === optionValue ? undefined : optionValue
    onClick(isChecked)
  }

  render() {
    const {
      className,
      optionValue = true,
      value,
      label,
      id = {},
      style,
      theme = {},
      error = false
    } = this.props

    return (
      <CheckboxWrapper className={className} style={style}>
        <CheckboxIcon
          className={className}
          onClick={this.handleCheck}
          id={id}
          checked={value === optionValue}
          optionValue={optionValue}
          label={label}
          error={error}
          style={style}
          theme={theme}
        />
      </CheckboxWrapper>
    )
  }
}

export default Checkbox
