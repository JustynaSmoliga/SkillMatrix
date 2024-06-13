import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillSelect from '../employeeForm/SkillSelect.vue';

describe('SkillSelect', () => {
  it('renders SkillSelect properly', () => {
    const wrapper = mount(SkillSelect, {props:{ id:'1', nameOfSkill: 'Java' }});
    const select=wrapper.find('select');
    expect(select.element.value).toBe('');
    select.trigger('click')
    select.setValue('advanced');
    expect(select.element.value).toBe('advanced');
  })


  it('renders SkillSelect properly', () => {
    const wrapper = mount(SkillSelect, {props:{ id:'1', nameOfSkill: 'Java' }});
    const select=wrapper.find('select');

    expect(select.element.value).toBe('');

    expect(select.classes()).toContain('select--short')

    const options=select.findAll('option');
    options.at(1).setSelected();
    // await select.trigger('change','advanced')
    // select.setValue('advanced');
    // expect(select.element.value).toBe('advanced');
    expect(wrapper.find('option:checked').element.value).toBe('beginner');
    expect(select.classes()).toContain('select--active')
  })

})




