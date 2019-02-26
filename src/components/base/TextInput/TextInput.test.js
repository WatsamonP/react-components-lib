import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { NUMBER_ONLY } from '../../../utils/regex'
import { onKeyPress } from './TextInput'
import TextInputComponent from './TextInput'

describe('onKeyPress', () => {
  it('pass `backspace` should return `true`', () => {
    const e = {
      which: 8, // backspace
    }
    expect(onKeyPress({ regex: NUMBER_ONLY })(e)).toBe(true)
  })

  it('pass `0` should return `true`', () => {
    const e = {
      which: 48, // number `0`
    }
    expect(onKeyPress({ regex: NUMBER_ONLY })(e)).toBe(true)
  })

  it('pass `w` should return `true`', () => {
    const e = {
      which: 87, // number `w`
      preventDefault: () => null,
    }
    expect(onKeyPress({ regex: NUMBER_ONLY })(e)).toBe(false)
  })
})
describe('Input', () => {
  describe('when render', () => {
    it('should return ReactElement', () => {
      const wrapper = shallow(<TextInputComponent />)
      expect(wrapper.exists()).toBe(true)
    })
    it('should able to change', () => {
      const wrapper = mount(<TextInputComponent value="test" />)
      console.log(wrapper.debug())
      expect(wrapper.find('input').props().value).toEqual('test')
    })
  })
  describe('onChange', () => {
    it('should call `onChange`', () => {
      const handleChange = sinon.spy()
      const wrapper = mount(<TextInputComponent onChange={handleChange} />)
      wrapper.find('input').simulate('change', 'a')
      expect(handleChange).toHaveProperty('callCount', 1)
    })

    it('with disabled, should not call `onChange`', () => {
      const handleChange = sinon.spy()
      const wrapper = mount(<TextInputComponent onChange={handleChange} disabled />)
      wrapper.find('input').simulate('change', 'a')
      expect(handleChange).toHaveProperty('callCount', 0)
    })
  })
})
