import React from 'react'
import { shallow, mount } from 'enzyme'
import withLabel from './withLabel'
import { getErrorMessage } from './BottomLabel'

describe('getErrorMessage', () => {
  it('pass `emptyString` should return `bottomLabel.error.requiredMessage`', () => {
    expect(getErrorMessage('')).toEqual('bottomLabel.error.requiredMessage')
  })
  it('pass `test` with `error` should return `bottomLabel.error.errorMessage`', () => {
    expect(getErrorMessage('test')).toEqual('bottomLabel.error.errorMessage')
  })
})

describe('withLabel', () => {
  describe('when render', () => {
    it('should return ReactElement', () => {
      const Div = () => <div />
      const Component = withLabel(Div)
      const wrapper = shallow(<Component />)

      expect(wrapper.exists()).toBe(true)
    })
  })
})
