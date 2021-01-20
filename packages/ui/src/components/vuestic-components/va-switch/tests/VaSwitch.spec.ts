import { mount, shallowMount } from '@vue/test-utils'

import VaSwitch from '../VaSwitch.vue'

import { testIsSelectableComponent } from '../../../vuestic-mixins/SelectableMixin/testIsSelectableComponent'
import { testIsContextableComponent } from '../../../context-test/context-provide/testIsContextableComponent'
import { testIsLoadingMixin } from '../../../vuestic-mixins/LoadingMixin/testIsLoadingMixin'

describe('VaSwitch', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaSwitch as any)
    expect(wrapper.findComponent('VaSwitch')).toBeTruthy()
  })
  it('default', () => {
    const wrapper: any =  shallowMount(VaSwitch as any, {
      propsData: { value: false },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('true value', () => {
    const wrapper: any =  shallowMount(VaSwitch as any, {
      propsData: { value: true },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('is Selectable Component', () => {
    expect(() => testIsSelectableComponent(VaSwitch)).not.toThrow()
  })
  it('is contextable component', () => {
    const contextProps = {
      value: true,
      readonly: false,
      disabled: false,
      size: 'test-size',
      loading: false,
      color: 'test-color',
      stateful: true,
    }
    expect(() => testIsContextableComponent(VaSwitch, contextProps)).not.toThrow()
  })
  it('has loading mixin', () => {
    expect(() => testIsLoadingMixin(VaSwitch)).not.toThrow()
  })
})
