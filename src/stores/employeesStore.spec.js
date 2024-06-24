import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia';
import { useEmployeesStore, SkillLevel, SkillName } from './employeesStore';

const firstEmployee = {
    id: '1', name: 'John', surname: 'Doe', position: 'Developer', email: 'johndoe@cap.com', skills: [
        { name: SkillName.JAVA, level: '' },
        { name: SkillName.DOTNET, level: '' },
        { name: SkillName.ANGULAR, level: SkillLevel.BEGINNER },
        { name: SkillName.VUEJS, level: SkillLevel.BEGINNER },
        { name: SkillName.TS, level: '' },
        { name: SkillName.JS, level: SkillLevel.BEGINNER },
        { name: SkillName.REACT, level: '' },
        { name: SkillName.SITECORE, level: '' }]
}
const secondEmployee = {
    id: '2', name: 'John', surname: 'Dlunt', position: 'Tester', email: 'johndlunt@cap.com', skills: [
        { name: SkillName.JAVA, level: SkillLevel.BEGINNER },
        { name: SkillName.DOTNET, level: SkillLevel.BEGINNER },
        { name: SkillName.ANGULAR, level: '' },
        { name: SkillName.VUEJS, level: '' },
        { name: SkillName.TS, level: '' },
        { name: SkillName.JS, level: '' },
        { name: SkillName.REACT, level: SkillLevel.INTERMEDIATE },
        { name: SkillName.SITECORE, level: SkillLevel.BEGINNER }]
}

const thirdEmployee = { id: '3', name: 'Jack', surname: 'Sparrow', position: 'Project Manager', email: 'jacksparrow@cap.com', skills: [] }
const fourthEmployee = {
    id: '4', name: 'Andrew', surname: 'Macdonald', position: 'Developer', email: 'am@cap.com', skills: [
        { name: SkillName.JAVA, level: SkillLevel.BEGINNER },
        { name: SkillName.DOTNET, level: '' },
        { name: SkillName.ANGULAR, level: SkillLevel.BEGINNER },
        { name: SkillName.VUEJS, level: '' },
        { name: SkillName.TS, level: SkillLevel.BEGINNER },
        { name: SkillName.JS, level: SkillLevel.BEGINNER },
        { name: SkillName.REACT, level: SkillLevel.INTERMEDIATE },
        { name: SkillName.SITECORE, level: '' }]
}

const employeesTable = [firstEmployee,secondEmployee,thirdEmployee,fourthEmployee]


describe.concurrent('Employees Store - filter employees by', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it.each([['And', '', '', [fourthEmployee]], 
             ['','D','',[firstEmployee,secondEmployee,fourthEmployee]],
             ['','','developer',[firstEmployee,fourthEmployee]],
             ['','','project manager',[thirdEmployee]],
             ['john','d','',[firstEmployee,secondEmployee]],
             ['john','','tester',[secondEmployee]],
             ['','d','tester',[secondEmployee]],
             ['','d','tester',[secondEmployee]],
             ['j','d','developer',[firstEmployee]],
             ['Mark','Ant','developer',[]]])('((%s,%s,%s) should return -> %o)', (name, surname, position, expected) => {

        const emloyeesStore = useEmployeesStore();
        expect(emloyeesStore.employees).toEqual(employeesTable);

        const filteredEmployees = emloyeesStore.filterEmployee(name, surname, position);

        expect(filteredEmployees).toEqual(expected);
    })
})

describe('Employees Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('delete employee', () => {
        const emloyeesStore = useEmployeesStore();
        expect(emloyeesStore.employees).toEqual(employeesTable);
        expect(emloyeesStore.employees.length).toBe(4);

        emloyeesStore.deleteEmployees(['1']);

        expect(emloyeesStore.employees.length).toBe(3);
        expect(emloyeesStore.employees).toEqual([secondEmployee,thirdEmployee,fourthEmployee])
    });

    it('delete 3 employees', () => {
        const emloyeesStore = useEmployeesStore();
        expect(emloyeesStore.employees).toEqual(employeesTable);
        expect(emloyeesStore.employees.length).toBe(4);

        emloyeesStore.deleteEmployees(['1', '2', '4']);

        expect(emloyeesStore.employees.length).toBe(1);
        expect(emloyeesStore.employees).toEqual([thirdEmployee])
    });

    it('add employee', () => {
        const emloyeesStore = useEmployeesStore();
        expect(emloyeesStore.employees).toEqual(employeesTable);
        expect(emloyeesStore.employees.length).toBe(4);

        const newEmployee = { id: '5', name: "Adam", surname: "Lambert", position: "project manager", email: "adamlam@gmail.com", skills: [{ name: "Java", level: "intermediate" }, { name: "Dot.Net", level: "beginner" }, { name: "Angular", level: "" }, { name: "Vue.js", level: "" }, { name: "TS", level: "" }, { name: "JS", level: "" }, { name: "React", level: "" }, { name: "Sitecore", level: "" }] }
        emloyeesStore.addEmployee(newEmployee);

        expect(emloyeesStore.employees.length).toBe(5);
        expect(emloyeesStore.employees).toEqual([firstEmployee,secondEmployee,thirdEmployee,fourthEmployee,newEmployee]);
    })

    it('edit employee', () => {
        const emloyeesStore = useEmployeesStore();
        expect(emloyeesStore.employees).toEqual(employeesTable);
        expect(emloyeesStore.employees[0]).toEqual(firstEmployee);

        const editedEmployeeValues = { name: "Adam", surname: "Lambert", position: "project manager", email: "adamlam@gmail.com", skills: [{ name: "Java", level: "intermediate" }, { name: "Dot.Net", level: "beginner" }, { name: "Angular", level: "" }, { name: "Vue.js", level: "" }, { name: "TS", level: "" }, { name: "JS", level: "" }, { name: "React", level: "" }, { name: "Sitecore", level: "" }] }
        emloyeesStore.editEmployee(editedEmployeeValues, '1');

        expect(emloyeesStore.employees.length).toBe(4);
        expect(emloyeesStore.employees[0]).toEqual({ id: '1', name: "Adam", surname: "Lambert", position: "project manager", email: "adamlam@gmail.com", skills: [{ name: "Java", level: "intermediate" }, { name: "Dot.Net", level: "beginner" }, { name: "Angular", level: "" }, { name: "Vue.js", level: "" }, { name: "TS", level: "" }, { name: "JS", level: "" }, { name: "React", level: "" }, { name: "Sitecore", level: "" }] });
    })

    it('get employee', () => {
        const emloyeesStore = useEmployeesStore();
        const employee = emloyeesStore.getEmployee('3');
        expect(employee).toEqual(thirdEmployee)
    })
})