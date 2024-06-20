import { describe, it, expect, vi } from 'vitest'
import { fn } from '@vitest/spy'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useEmployeesStore, SkillLevel, SkillName } from '@/stores/employeesStore'
import SkillMatrix from './SkillMatrix.vue';
import TheEmployeesTable from '../employeesTable/TheEmployeesTable.vue'
import TheButtonsSection from '../buttonsSection/TheButtonsSection.vue'
import { nextTick } from 'vue'

describe('SkillMatrix', () => {

    it('when click single checkbox remove and edit buttons are enabled, add button is disabled ', async () => {
        const toggleSelectedListItemMockFuntion = vi.fn();

        const wrapper = mount(SkillMatrix, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: fn,
                    initialState: {
                        employees: {
                            employees: [{
                                id: '1', name: 'John', surname: 'Doe', position: 'Developer', email: 'johndoe@cap.com', skills: [
                                    { name: SkillName.JAVA, level: '' },
                                    { name: SkillName.DOTNET, level: '' },
                                    { name: SkillName.ANGULAR, level: SkillLevel.BEGINNER },
                                    { name: SkillName.VUEJS, level: SkillLevel.BEGINNER },
                                    { name: SkillName.TS, level: '' },
                                    { name: SkillName.JS, level: SkillLevel.INTERMEDIATE },
                                    { name: SkillName.REACT, level: '' },
                                    { name: SkillName.SITECORE, level: '' }]
                            }, {
                                id: '2', name: 'John', surname: 'Dlunt', position: 'Tester', email: 'emilyblunt@cap.com', skills: [
                                    { name: SkillName.JAVA, level: SkillLevel.BEGINNER },
                                    { name: SkillName.DOTNET, level: SkillLevel.BEGINNER },
                                    { name: SkillName.ANGULAR, level: SkillLevel.ADVANCED },
                                    { name: SkillName.VUEJS, level: '' },
                                    { name: SkillName.TS, level: '' },
                                    { name: SkillName.JS, level: '' },
                                    { name: SkillName.REACT, level: SkillLevel.INTERMEDIATE },
                                    { name: SkillName.SITECORE, level: SkillLevel.BEGINNER }]
                            }]
                        }
                    }
                })],
                provide: { toggleSelectedListItem: toggleSelectedListItemMockFuntion }
            }

        });

        const store = useEmployeesStore();
        const table=wrapper.findComponent(TheEmployeesTable);
        const checkbox=wrapper.findAll("[data-test=table-checkbox]")[0];
        // console.log(checkbox);
         checkbox.trigger('click');
        await nextTick();
        const buttonsSection=wrapper.findComponent(TheButtonsSection);
        const buttonAdd=buttonsSection.find("[data-test=btn-add] [data-test=button]");
        expect(wrapper).toMatchSnapshot();
        console.log(buttonAdd.attributes());
        // expect(buttonAdd.attributes()).toEqual({disabled:''});
        expect(buttonAdd.attributes().disabled).toBeDefined();



    })

    it('when minimum 2 checkboxes are checked, only remove button is enabled',()=>{})
    it('when minimum 2 checkboxes are checked, only remove button is enabled',()=>{})
    it('remove button click delete selected employee',()=>{})
    it('add button click open add employee form',()=>{})
    it('edit button click open edit employee form',()=>{})
    it('when filter by name is filled and filter button click, data in table should be filtered by name ',()=>{})
    it('when filter by surname is filled and filter button click, data in table should be filtered by surname ',()=>{})
    it('when filter by position is filled and filter button click, data in table should be filtered by position ',()=>{})
    it('when filter by name,surname and position are filled and filter button click, data in table should be filtered by name,surname and position ',()=>{})
    it('when filters are applied, remove filters button click should remove filters from table',()=>{})
    it('when in store are 4 employees, in table are 4 records',()=>{})





})
