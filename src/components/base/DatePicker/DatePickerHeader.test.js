import React from 'react'
import { shallow, mount } from 'enzyme'
import DatePickerHeader from './DatePickerHeader'

describe('DatePickerHeader', () => {
  const date = '2018-11-25T14:46:12.715Z'

  describe('when render', () => {
    it('should return ReactElement', () => {
      const wrapper = shallow(<DatePickerHeader />)
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('ButtonWrapper')).toHaveLength(2)
      expect(wrapper.find('select')).toHaveLength(2)
      expect(wrapper.find('DateTitle')).toHaveLength(1)
    })

    it('should show correct month', () => {
      const wrapper = mount(<DatePickerHeader date={date} />)
      expect(wrapper.find('DateTitle').text()).toEqual('พฤศจิกายน 2561')
    })
  })
})
