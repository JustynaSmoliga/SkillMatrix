import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EmployeesTableListItem from './EmployeesTableListItem.vue';
import SkillsSection from './SkillsSection.vue';
import { SkillName, SkillLevel } from '@/stores/employeesStore';
import { vi } from 'vitest';

describe('SkillsSection', () => {

    it('when click on row employee skills section shows', async () => {
        const toggleSelectedListItemMockFuntion = vi.fn();

        const wrapper = mount(EmployeesTableListItem, {
            props: {
                employee: {
                    id: '1', name: 'John', surname: 'Doe', position: 'Developer', email: 'johndoe@cap.com',
                    skills: [
                        { name: SkillName.JAVA, level: '' },
                        { name: SkillName.DOTNET, level: '' },
                        { name: SkillName.ANGULAR, level: SkillLevel.BEGINNER },
                        { name: SkillName.VUEJS, level: SkillLevel.BEGINNER },
                        { name: SkillName.TS, level: '' },
                        { name: SkillName.JS, level: SkillLevel.BEGINNER },
                        { name: SkillName.REACT, level: '' },
                        { name: SkillName.SITECORE, level: '' }
                    ]
                },
                isCheckboxDisabled: true
            },
            global: {
                provide: { toggleSelectedListItem: toggleSelectedListItemMockFuntion }
            }
        });

        expect(wrapper.find("[data-test=table-item]").exists()).toBe(true);
        expect(wrapper.findComponent(SkillsSection).exists()).toBe(false);
        await wrapper.find("[data-test=table-td]").trigger('click');
        expect(wrapper.findComponent(SkillsSection).exists()).toBe(true);
      
    })


    it('when 2 clicks are triggered on the same row, employee skills section shows and hides', async () => {

        const toggleSelectedListItemMockFuntion = vi.fn();

        const wrapper = mount(EmployeesTableListItem, {
            props: {
                employee: {
                    id: '1', name: 'John', surname: 'Doe', position: 'Developer', email: 'johndoe@cap.com',
                    skills: [
                    ]
                },
                isCheckboxDisabled: true
            },
            global: {
                provide: { toggleSelectedListItem: toggleSelectedListItemMockFuntion }
            }
        });

        expect(wrapper.findComponent(SkillsSection).exists()).toBe(false);
        await wrapper.find("[data-test=table-td]").trigger('click');
        expect(wrapper.findComponent(SkillsSection).exists()).toBe(true);
        expect(wrapper.text()).contain('No skills added');
        await wrapper.find("[data-test=table-td]").trigger('click');
        expect(wrapper.findComponent(SkillsSection).exists()).toBe(false);
    })

    it('klikniecie na checkbox -> event emit/odklikniecie?', async () => {
//moze to powinnismy na wyzszym poziomie testowac 

        // const toggleSelectedListItemMockFuntion = vi.fn();

        // const wrapper = mount(EmployeesTableListItem, {
        //     props: {
        //         employee: {
        //             id: '1', name: 'John', surname: 'Doe', position: 'Developer', email: 'johndoe@cap.com',
        //             skills: [
        //             ]
        //         },
        //         isCheckboxDisabled: false
        //     },
        //     global: {
        //         provide: { toggleSelectedListItem: toggleSelectedListItemMockFuntion }
        //     }
        // });

        // expect(wrapper.findComponent(SkillsSection).exists()).toBe(false);
        // await wrapper.find("[data-test=table-td]").trigger('click');
        // expect(wrapper.findComponent(SkillsSection).exists()).toBe(true);
        // expect(wrapper.text()).contain('No skills added');
        // await wrapper.find("[data-test=table-td]").trigger('click');
        // expect(wrapper.findComponent(SkillsSection).exists()).toBe(false);
    })
})
