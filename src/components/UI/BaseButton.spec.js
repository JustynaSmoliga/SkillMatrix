import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  it('renders base button properly', () => {
    const wrapper = mount(BaseButton, { 
      slots:{
        default:'Add'
      },
      props: {
        type:'button', 
        isDisabled: false, 
        mode:'btn--primary'
      }
  });
    expect(wrapper.html()).toContain('Add')})
})