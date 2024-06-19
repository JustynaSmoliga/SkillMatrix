import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EmployeesTableListItem from './EmployeesTableListItem.vue';

describe('SkillsSection', () => {

    it('initially there is no skills section', async () => {
    })

  it('when click on row employee skills section shows', async () => {
    const wrapper = mount(EmployeesTableListItem, {
        props:{
            employee:[],
            isCheckboxDisabled:true 
        }
    });

    console.log(wrapper);
    expect(1).toBe(1);
  })

  
  it('when 2 clicks are triggered on the same row, employee skills section shows and hides', async () => {
})

  it('klikniecie na checkbox -> event emit/odklikniecie?', async () => {
  })
})
