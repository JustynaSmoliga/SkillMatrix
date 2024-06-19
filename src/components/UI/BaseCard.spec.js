import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseCard from './BaseButton.vue';

describe('BaseCard', () => {
    it('renders base card content properly', () => {
      const wrapper = mount(BaseCard, { 
        slots:{
          default:'<p>This is content for testing purposes</p>'
        },
        
    });
      expect(wrapper.html()).toContain('This is content for testing purposes')})
  })