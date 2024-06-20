import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillsSection from './SkillsSection.vue';
import { SkillName, SkillLevel } from '@/stores/employeesStore';

describe('SkillsSection', () => {

  it('if there are no skills, `No skills added` paragraph is rendered ', async () => {
    const wrapper = mount(SkillsSection, {
        props:{
            skills:[] 
        }
    });

    expect(wrapper.find('[data-test="paragraph"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="paragraph"]').text()).toBe('No skills added');
    expect(wrapper.find('[data-test="skill-button"]').exists()).toBe(false);

  })

  it('if there are 3 skills, 3 skill buttons are rendered', async () => {
    const employeeSkills=[
        {name:SkillName.JAVA, level:SkillLevel.BEGINNER}, 
        {name:SkillName.DOTNET, level:SkillLevel.INTERMEDIATE},
        {name:SkillName.ANGULAR, level:SkillLevel.ADVANCED},  
      ];
      
    const wrapper = mount(SkillsSection, {
        props:{
             skills:employeeSkills
            }
        });

    expect(wrapper.find('[data-test="paragraph"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="skill-button"]').exists()).toBe(true);
    expect(wrapper.findAll('[data-test="skill-button"]')).toHaveLength(3);
  }) 
})
