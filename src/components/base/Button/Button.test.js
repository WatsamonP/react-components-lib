import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  describe('when render', () => {
    it('should return ReactElement', () => {
      const wrapper = shallow(<Button />)
      expect(wrapper.exists()).toBe(true)
    })

    it('should contain placeholder label', () => {
      const wrapper = shallow(<Button />)
      expect(wrapper.children()).toHaveLength(3)
      expect(wrapper.text()).toBe('label.button')
    })

    it('should be disabled when passed `disabled` props', () => {
      const wrapper = shallow(<Button disabled />)
      expect(wrapper.prop('disabled')).toBe(true)
    })
  })

  describe('when button is clicked', () => {
    it('should call onClick function', () => {
      const handleClick = jest.fn()
      const wrapper = shallow(<Button onClick={handleClick} />)
      wrapper.simulate('click')
      expect(handleClick).toHaveBeenCalled()
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not call onClick function when button is disabled', () => {
      const handleClick = jest.fn()
      const wrapper = mount(<Button onClick={handleClick} disabled />)
      wrapper.simulate('click')
      expect(handleClick).toHaveBeenCalledTimes(0)
    })
  })
})
