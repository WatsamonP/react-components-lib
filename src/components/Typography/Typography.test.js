import React from 'react'
import { shallow, mount } from 'enzyme'
import { H1, H2, Label1, Label2, Label3, Label4, Label5, Label6, Info, Body, ShortLabel } from './Typography'

describe('ShortLabel', () => {
  describe('when render', () => {
    it('should return ReactElement', () => {
      const wrapper = shallow(<ShortLabel />)

      expect(wrapper.exists()).toBe(true)
    })
    it('should return `abcdefghifklmnopqrstuvwxyz`', () => {
      const Component = () => (
        <div style={{ maxWidth: '10px' }} >
          <ShortLabel>abcdefghifklmnopqrstuvwxyz</ShortLabel>
        </div>
      )
      const wrapper = mount(<Component />)
      expect(wrapper.contains(['abcdefghifklmnopqrstuvwxyz'])).toBe(true)
    })
  })
})


describe('Typography', () => {
  describe('H1', () => {
    it('should render component H1', () => {
      const wrapper = mount(<H1>Test</H1>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component H1', () => {
      const wrapper = mount(<H1>Test</H1>)
      expect(wrapper.find('h1').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<H1>Test</H1>)
      expect(wrapper.find('h1').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<H1>Test</H1>)
      expect(wrapper.find('h1').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<H1>{ children }</H1>)
      expect(wrapper.find('h1').contains([children])).toEqual(true)
    })
  })
  describe('H2', () => {
    it('should render component H2', () => {
      const wrapper = mount(<H2>Test</H2>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component H2', () => {
      const wrapper = mount(<H2>Test</H2>)
      expect(wrapper.find('h2').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<H2>Test</H2>)
      expect(wrapper.find('h2').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<H2>Test</H2>)
      expect(wrapper.find('h2').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<H2>{ children }</H2>)
      expect(wrapper.find('h2').contains([children])).toEqual(true)
    })
  })

  describe('Label1', () => {
    it('should render component Label1', () => {
      const wrapper = mount(<Label1>Test</Label1>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component Label1', () => {
      const wrapper = mount(<Label1>Test</Label1>)
      expect(wrapper.find('span').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<Label1>Test</Label1>)
      expect(wrapper.find('span').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<Label1>Test</Label1>)
      expect(wrapper.find('span').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<Label1>{ children }</Label1>)
      expect(wrapper.find('span').contains([children])).toEqual(true)
    })
  })

  describe('Label2', () => {
    it('should render component Label2', () => {
      const wrapper = mount(<Label2>Test</Label2>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component Label2', () => {
      const wrapper = mount(<Label2>Test</Label2>)
      expect(wrapper.find('span').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<Label2>Test</Label2>)
      expect(wrapper.find('span').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<Label2>Test</Label2>)
      expect(wrapper.find('span').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<Label2>{ children }</Label2>)
      expect(wrapper.find('span').contains([children])).toEqual(true)
    })
  })

  describe('Label3', () => {
    it('should render component Label3', () => {
      const wrapper = mount(<Label3>Test</Label3>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component Label3', () => {
      const wrapper = mount(<Label3>Test</Label3>)
      expect(wrapper.find('span').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<Label3>Test</Label3>)
      expect(wrapper.find('span').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<Label3>Test</Label3>)
      expect(wrapper.find('span').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<Label3>{ children }</Label3>)
      expect(wrapper.find('span').contains([children])).toEqual(true)
    })
  })

  describe('Label4', () => {
    it('should render component Label4', () => {
      const wrapper = mount(<Label4>Test</Label4>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component Label4', () => {
      const wrapper = mount(<Label4>Test</Label4>)
      expect(wrapper.find('span').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<Label4>Test</Label4>)
      expect(wrapper.find('span').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<Label4>Test</Label4>)
      expect(wrapper.find('span').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<Label4>{ children }</Label4>)
      expect(wrapper.find('span').contains([children])).toEqual(true)
    })
  })

  describe('Label5', () => {
    it('should render component Label5', () => {
      const wrapper = mount(<Label5>Test</Label5>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component Label5', () => {
      const wrapper = mount(<Label5>Test</Label5>)
      expect(wrapper.find('span').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<Label5>Test</Label5>)
      expect(wrapper.find('span').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<Label5>Test</Label5>)
      expect(wrapper.find('span').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<Label5>{ children }</Label5>)
      expect(wrapper.find('span').contains([children])).toEqual(true)
    })
  })

  describe('Label6', () => {
    it('should render component Label6', () => {
      const wrapper = mount(<Label6>Test</Label6>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component Label6', () => {
      const wrapper = mount(<Label6>Test</Label6>)
      expect(wrapper.find('span').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<Label6>Test</Label6>)
      expect(wrapper.find('span').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<Label6>Test</Label6>)
      expect(wrapper.find('span').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<Label6>{ children }</Label6>)
      expect(wrapper.find('span').contains([children])).toEqual(true)
    })
  })

  describe('Info', () => {
    it('should render component Info', () => {
      const wrapper = mount(<Info>Test</Info>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component Info', () => {
      const wrapper = mount(<Info>Test</Info>)
      expect(wrapper.find('span').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<Info>Test</Info>)
      expect(wrapper.find('span').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<Info>Test</Info>)
      expect(wrapper.find('span').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<Info>{ children }</Info>)
      expect(wrapper.find('span').contains([children])).toEqual(true)
    })
  })

  describe('Body', () => {
    it('should render component Body', () => {
      const wrapper = mount(<Body>Test</Body>)
      expect(wrapper.exists()).toBe(true)
    })
    it('should render component Body', () => {
      const wrapper = mount(<Body>Test</Body>)
      expect(wrapper.find('div').exists()).toBe(true)
    })
    it('should contains with input html element', () => {
      const wrapper = mount(<Body>Test</Body>)
      expect(wrapper.find('div').length).toBe(1)
    })
    it('should render children with text', () => {
      const wrapper = mount(<Body>Test</Body>)
      expect(wrapper.find('div').contains(['Test'])).toBe(true)
    })
    it('should render children with html', () => {
      const children = <span>Hello</span>
      const wrapper = mount(<Body>{ children }</Body>)
      expect(wrapper.find('div').contains([children])).toEqual(true)
    })
  })
})
