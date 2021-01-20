// @ts-nocheck
// import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import VaRating from '../VaRating.vue'

import { testHasStatefulMixin } from '../../../vuestic-mixins/StatefulMixin/testHasStatefulMixin'
import { testIsContextableComponent } from '../../../context-test/context-provide/testIsContextableComponent'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'

describe('VaRating', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaRating)
    expect(wrapper.findComponent('VaRating')).toBeTruthy()
  })
  it('default', () => {
    const wrapper: any =  shallowMount(VaRating as any)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('custom length', () => {
    const wrapper: any =  shallowMount(VaRating as any, {
      propsData: { max: 3 },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('numbers', () => {
    const wrapper: any =  shallowMount(VaRating as any, {
      propsData: { numbers: true },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has stateful mixin', () => {
    expect(() => testHasStatefulMixin(VaRating)).not.toThrow()
  })

  //   //ToDO: Fix after context will work fine
  // it('is contextable component', () => {
  //   const props = {
  //     value: 0,
  //     icon: 'star',
  //     halfIcon: 'star_half',
  //     emptyIcon: 'star_empty',
  //     readonly: false,
  //     disabled: false,
  //     numbers: false,
  //     halves: false,
  //     max: 5,
  //     size: 'medium',
  //     clearable: false,
  //     hover: false,
  //     texts: [],
  //     textColor: 'test-color',
  //     unselectedColor: 'test-color',
  //   }
  //   expect(() => testIsContextableComponent(VaRating, props)).not.toThrow()
  // })
  it('has ColorThemeMixin', () => {
    expect(() =>
      testHasColorThemeMixin((VaRating as any) as ColorThemeMixin),
    ).not.toThrow()
  })
})
