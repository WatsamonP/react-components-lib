import React from 'react'
import { shallow, mount } from 'enzyme'
import { RadioComponent } from './Radio'

describe('Header', () => {
  const options = [
    {
      code: '1',
      translations: {
        th: {
          label: 'choice 1',
        },
        en: {
          label: 'ข้อ 1',
        },
      },
    },
    {
      code: '2',
      translations: {
        th: {
          label: 'choice 2',
        },
        en: {
          label: 'ข้อ 2',
        },
      },
    },
    {
      code: '3',
      translations: {
        th: {
          label: 'choice 3',
        },
        en: {
          label: 'ข้อ 3',
        },
      },
    },
  ]
  describe('when render', () => {
    it('should return ReactElement', () => {
      const wrapper = shallow(<RadioComponent />)
      expect(wrapper.exists()).toBe(true)
    })
    it('no props `options`, should not have `Item`', () => {
      const wrapper = mount(<RadioComponent />)
      expect(wrapper.find('Item').length).toEqual(0)
    })
    it('has `options`, should have `Item`', () => {
      const wrapper = mount(<RadioComponent options={options} />);
      expect(wrapper.find('Item').length).toEqual(3)
    })
  })
})
