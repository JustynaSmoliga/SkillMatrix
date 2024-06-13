import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '../UI//BaseButton.vue';

describe('BaseButton', () => {
  it('renders base button properly', () => {
    const wrapper = mount(BaseButton, { slots:{default:'Add'},props: {type:'button', isDisabled: false, mode:'btn--primary' } });
    expect(wrapper.html()).toContain('Add')
  })

//   it('renders base button properly', () => {
//     const wrapper = mount(BaseButton, { slots:{default:'Add'},props: {type:'button', isDisabled: true, mode:'btn--primary' } });
//     // expect(wrapper.get('[data-test="button"]').attributes()).toEqual({disabled:'true'});
//     // expect(wrapper.attributes()).toEqual({disabled:'true'});

//   })


})




// import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })