import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillSelect from './SkillSelect.vue';

describe('SkillSelect', () => {

  it('renders SkillSelect properly initially', async () => {
    const wrapper = mount(SkillSelect, {
        props:{
             id:'1', 
             nameOfSkill: 'Java',
             level:'' }});
    const select=wrapper.find('select');

    expect(select.element.value).toBe('');

    expect(select.classes()).toContain('select--short')

    const options=select.findAll('option');
    await options.at(1).setSelected();
   
    expect(wrapper.find('option:checked').element.value).toBe('beginner');
    expect(select.classes()).toContain('select--active');
  })

  it('SkillSelect is clearing correctly',async()=>{
    const wrapper = mount(SkillSelect, {props:{ id:'1', nameOfSkill: 'Java', level:'' }});
    const select=wrapper.find('select');

    expect(select.element.value).toBe('');
    expect(select.classes()).toContain('select--short')

    const options=select.findAll('option');
    await options.at(1).setSelected();
   
    expect(wrapper.find('option:checked').element.value).toBe('beginner');
    expect(select.classes()).toContain('select--active');

    await options.at(0).setSelected();
    expect(select.classes()).toContain('select--short');
    expect(wrapper.find('option:checked').element.value).toBe('');
  })

  it('When level is different than empty value, value is shown and set', ()=>{
    const wrapper = mount(SkillSelect, {
        props:{ 
            id:'1', 
            nameOfSkill: 'Java',
            level:'intermediate' 
        }});
    const select=wrapper.find('select');

    expect(select.element.value).toBe('intermediate');
    expect(select.classes()).toContain('select--active');
  })
})
