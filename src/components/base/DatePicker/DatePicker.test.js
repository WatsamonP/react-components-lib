import React from 'react'
import { shallow, mount } from 'enzyme'
import DatePicker from './DatePicker'

describe('DatePicker', () => {
  describe('when render', () => {
    it('should return ReactElement', () => {
      const wrapper = shallow(<DatePicker />)
      expect(wrapper.exists()).toBe(true)
    })

    it('should return correct initial state', () => {
      const wrapper = mount(<DatePicker />)
      expect(wrapper.state('isOpen')).toEqual(false)
    })
  })

  describe('when render with state', () => {
    it('should show calendar when click', () => {
      const wrapper = mount(<DatePicker />)
      wrapper.find('input').simulate('click')
      expect(wrapper.state('isOpen')).toEqual(true)
    })

    it('should return correct date', () => {
      const wrapper = mount(<DatePicker value="11/11/2018" />)
      expect(wrapper.find('input').instance().value).toBe('11/11/2561')
    })
  })
})
