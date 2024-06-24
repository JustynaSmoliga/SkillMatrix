import { describe, it, expect, vi } from 'vitest'
import { fn } from '@vitest/spy'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useEmployeesStore, SkillLevel, SkillName } from '@/stores/employeesStore'
import SkillMatrix from './SkillMatrix.vue';
import EmployeeForm from '../employeeForm/EmployeeForm.vue'
import EmployeesTableListItem from '../employeesTable/EmployeesTableListItem.vue';
// import { nextTick } from 'vue'

describe('SkillMatrix', () => {

    it('initially ADD button is enabled, EDIT and REMOVE buttons are disabled', async () => {
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
        const buttonAdd = wrapper.find("[data-test=btn-add] [data-test=button]");
        const buttonEdit = wrapper.find("[data-test=btn-edit] [data-test=button]");
        const buttonRemove = wrapper.find("[data-test=btn-remove] [data-test=button]");

        expect(buttonAdd.attributes().disabled).toBeUndefined();
        expect(buttonEdit.attributes().disabled).toBeDefined();
        expect(buttonRemove.attributes().disabled).toBeDefined();
    })

    it('when single checkbox is checked, REMOVE and EDIT buttons are enabled, ADD button is disabled ', async () => {
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
        const firstCheckboxInTheEmployeesTable = wrapper.findAll("[data-test=table-checkbox]")[0];
        const buttonAdd = wrapper.find("[data-test=btn-add] [data-test=button]");
        const buttonEdit = wrapper.find("[data-test=btn-edit] [data-test=button]");
        const buttonRemove = wrapper.find("[data-test=btn-remove] [data-test=button]");

        await firstCheckboxInTheEmployeesTable.trigger('click');

        expect(buttonAdd.attributes().disabled).toBeDefined();
        expect(buttonEdit.attributes().disabled).toBeUndefined();
        expect(buttonRemove.attributes().disabled).toBeUndefined();

    })

    it('when more than 1 checkbox is checked, only REMOVE button is enabled', async () => {
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
        const allCheckboxesInTheEmployeesTable = wrapper.findAll("[data-test=table-checkbox]");
        const buttonAdd = wrapper.find("[data-test=btn-add] [data-test=button]");
        const buttonEdit = wrapper.find("[data-test=btn-edit] [data-test=button]");
        const buttonRemove = wrapper.find("[data-test=btn-remove] [data-test=button]");

        await allCheckboxesInTheEmployeesTable[0].trigger('click');
        await allCheckboxesInTheEmployeesTable[1].trigger('click');


        expect(buttonAdd.attributes().disabled).toBeDefined();
        expect(buttonEdit.attributes().disabled).toBeDefined();
        expect(buttonRemove.attributes().disabled).toBeUndefined();

    })
    it('when REMOVE button is clicked, selected employees are deleted', async () => {
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
        const allCheckboxesInTheEmployeesTable = wrapper.findAll("[data-test=table-checkbox]");
        const buttonRemove = wrapper.find("[data-test=btn-remove] [data-test=button]");

        await allCheckboxesInTheEmployeesTable[0].trigger('click');
        await allCheckboxesInTheEmployeesTable[1].trigger('click');
        await buttonRemove.trigger('click');

        expect(store.deleteEmployees).toHaveBeenNthCalledWith(1, ["1", "2"]);



        // console.log(wrapper.findAllComponents(EmployeesTableListItem)[0]);
        // expect(wrapper.findAllComponents(EmployeesTableListItem).length).toBe(0);
        // expect(wrapper).toMatchSnapshot();

        // expect(wrapper.findComponent(EmployeesTableListItem).exists()).toBe(false);

        // const table=wrapper.findComponent(TheEmployeesTable);
        // const checkbox=wrapper.findAll("[data-test=table-checkbox]")[0];
        // const buttonsSection=wrapper.findComponent(TheButtonsSection);

        // const buttonAdd=buttonsSection.find("[data-test=btn-add] [data-test=button]");
        // expect(buttonAdd.attributes().disabled).toBeUndefined();

        // // console.log(checkbox);
        //  checkbox.trigger('click');
        // await nextTick();
        // // expect(wrapper).toMatchSnapshot();
        // // console.log(buttonAdd.attributes());
        // // expect(buttonAdd.attributes()).toEqual({disabled:''});
        // expect(buttonAdd.attributes().disabled).toBeDefined();


    })
    it('when ADD button is clicked, employee form in ADD MODE should be open', async () => {
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
        const buttonAdd = wrapper.find("[data-test=btn-add] [data-test=button]");
        expect(wrapper.findComponent(EmployeeForm).exists()).toBe(false);
        await buttonAdd.trigger('click');
        expect(wrapper.findComponent(EmployeeForm).exists()).toBe(true);
        expect(wrapper.findComponent(EmployeeForm).text()).contain('Add new record')
        expect(wrapper.findComponent(EmployeeForm).text()).not.contain('Edit')
        // const nameInput = wrapper.find("[data-test=form-name-input]");
        // const surnameInput = wrapper.find("[data-test=form-surname-input]");
        // const emailInput = wrapper.find("[data-test=form-email-input]");
        // const positionSelect = wrapper.find("[data-test=form-position-select]");
        // const submitButton = wrapper.find("[data-test=form-btn-submit] [data-test=button]");
        

        // const skillSelect = wrapper.find("[data-test=form-position-select]");

        // await nameInput.setValue('Mark');
        // await surnameInput.setValue('Anthony');
        // await emailInput.setValue('ma@cap.com');
        // await positionSelect.setValue('tester');
        // // await submitButton.trigger('click');
        // await wrapper.findComponent(EmployeeForm).vm.$emit('submit.prevent');

        // expect(store.addEmployee).toHaveBeenCalled();
        // expect(wrapper.emitted()).toHaveProperty('add-employee');

        

        
        

    })
    it('when EDIT button is clicked, employee form in EDIT MODE should open', async() => { 
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
        const firstCheckboxInTheEmployeesTable = wrapper.findAll("[data-test=table-checkbox]")[0];
        const buttonEdit = wrapper.find("[data-test=btn-edit] [data-test=button]");

        expect(wrapper.findComponent(EmployeeForm).exists()).toBe(false);

        await firstCheckboxInTheEmployeesTable.trigger('click');
        await buttonEdit.trigger('click');

        expect(wrapper.findComponent(EmployeeForm).exists()).toBe(true);
        expect(wrapper.findComponent(EmployeeForm).text()).not.contain('Add new record');
        expect(wrapper.findComponent(EmployeeForm).text()).contain('Edit');
    })
    // it('when filter by name is filled and filter button is clicked, data in table should be filtered by name ', async () => { 

    //     const toggleSelectedListItemMockFuntion = vi.fn();

    //     const wrapper = mount(SkillMatrix, {
    //         global: {
    //             plugins: [createTestingPinia({
    //                 createSpy: fn,
    //                 initialState: {
    //                     employees: {
    //                         employees: [{
    //                             id: '1', name: 'John', surname: 'Doe', position: 'Developer', email: 'johndoe@cap.com', skills: [
    //                                 { name: SkillName.JAVA, level: '' },
    //                                 { name: SkillName.DOTNET, level: '' },
    //                                 { name: SkillName.ANGULAR, level: SkillLevel.BEGINNER },
    //                                 { name: SkillName.VUEJS, level: SkillLevel.BEGINNER },
    //                                 { name: SkillName.TS, level: '' },
    //                                 { name: SkillName.JS, level: SkillLevel.INTERMEDIATE },
    //                                 { name: SkillName.REACT, level: '' },
    //                                 { name: SkillName.SITECORE, level: '' }]
    //                         }, {
    //                             id: '2', name: 'Jeremy', surname: 'Blunt', position: 'Tester', email: 'jeremyblunt@cap.com', skills: [
    //                                 { name: SkillName.JAVA, level: SkillLevel.BEGINNER },
    //                                 { name: SkillName.DOTNET, level: SkillLevel.BEGINNER },
    //                                 { name: SkillName.ANGULAR, level: SkillLevel.ADVANCED },
    //                                 { name: SkillName.VUEJS, level: '' },
    //                                 { name: SkillName.TS, level: '' },
    //                                 { name: SkillName.JS, level: '' },
    //                                 { name: SkillName.REACT, level: SkillLevel.INTERMEDIATE },
    //                                 { name: SkillName.SITECORE, level: SkillLevel.BEGINNER }]
    //                         }]
    //                     }
    //                 }
    //             })],
    //             provide: { toggleSelectedListItem: toggleSelectedListItemMockFuntion }
    //         }

    //     });

    //     const store = useEmployeesStore();
    //     // console.log(store.filterEmployee("","","").length);
    //     // expect(store.filterEmployee.length).toBe(2);
    //     const filterByNameInput = wrapper.find("[data-test=filter-name-input]");
    //     const filterBySurnameInput = wrapper.find("[data-test=filter-surname-input]");
    //     const filterByPositionSelect = wrapper.find("[data-test=filter-position-select]");

    //     await filterByNameInput.setValue('Jeremy');
    //     await filterBySurnameInput.setValue('Bl');
    //     await filterByPositionSelect.setValue('tester');


    //     const filterButton = wrapper.find("[data-test=filter-btn] [data-test=button]");
    //     await filterButton.trigger('click');
    //     const items=wrapper.findAllComponents(EmployeesTableListItem);
    //     expect(items.length).toBe(1);
    //     // expect(store.filterEmployee.length).toBe(1);
    //     // nextTick();
    //     // store.filterEmployee('je','','');
    //     // console.log(store.filterEmployee('je'));
     

    //     // expect(store.filterEmployee).toHaveBeenCalledTimes(1);

    // })
    it('when filter by surname is filled and filter button click, data in table should be filtered by surname ', () => { })
    it('when filter by position is filled and filter button click, data in table should be filtered by position ', () => { })
    it('when filter by name,surname and position are filled and filter button click, data in table should be filtered by name,surname and position ', () => { })
    it('when filters are applied, remove filters button click should remove filters from table', () => { })
    it('when in store are 4 employees, in table are 4 records', () => { })





})
