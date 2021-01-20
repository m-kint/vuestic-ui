import { mount, shallowMount } from '@vue/test-utils'

import VaMediumEditor from '../VaMediumEditor.vue'

describe('VaMediumEditor', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaMediumEditor)
    expect(wrapper.findComponent('VaMediumEditor')).toBeTruthy()
  })
})
