import React from 'react'
import { shallow, mount } from 'enzyme'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  describe('when render', () => {
    it('should return ReactElement', () => {
      const wrapper = shallow(<Checkbox />)
      expect(wrapper.exists()).toBe(true)
    })

    it('should show correct label', () => {
      const checkboxLabel = 'checkbox.label'
      const wrapper = mount(<Checkbox label={checkboxLabel} />)
      expect(wrapper.find('CheckboxIcon').props().label).toEqual('checkbox.label')
    })
  })

  describe('when checkbox is checked', () => {
    it('should show as chekced', () => {
      const minProps = {
        value: true,
        optionValue: true,
      }
      const wrapper = shallow(<Checkbox {...minProps} />)
      expect(wrapper.find('CheckboxIcon').props().optionValue).toBe(true)
      expect(wrapper.find('CheckboxIcon').props().checked).toBe(true)
    })

    it('should show as unchecked', () => {
      const minProps = {
        value: false,
        optionValue: true,
      }
      const wrapper = shallow(<Checkbox {...minProps} />)
      expect(wrapper.find('CheckboxIcon').props().checked).toBe(false)
    })
  })
})
