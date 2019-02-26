import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from './Dropdown'

describe('Dropdown', () => {
  describe('when render', () => {
    it('should return ReactElement', () => {
      const wrapper = shallow(<Dropdown />)
      expect(wrapper.exists()).toBe(true)
    })
  })
})
