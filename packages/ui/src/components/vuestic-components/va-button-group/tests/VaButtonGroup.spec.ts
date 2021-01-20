import { mount } from '@vue/test-utils'

import VaButtonGroup from '../VaButtonGroup.vue'

describe('VaButtonGroup', () => {
  it('should render without an error', () => {
    const wrapper: any = mount(VaButtonGroup as any)
    expect(wrapper.findComponent('VaButtonGroup')).toBeTruthy()
  })
})
