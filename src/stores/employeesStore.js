
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const SkillLevel = Object.freeze({
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  NONE: 'none'
})

export const SkillName = Object.freeze({
  JAVA: 'Java', DOTNET: 'Dot.Net', ANGULAR: 'Angular', VUEJS: 'Vue.js', TS: 'TS', JS: 'JS', REACT: 'React', SITECORE: 'Sitecore', NONE: 'No skills added'
})

export const employeeSkills = [
  { name: SkillName.JAVA, level: '' },
  { name: SkillName.DOTNET, level: '' },
  { name: SkillName.ANGULAR, level: '' },
  { name: SkillName.VUEJS, level: '' },
  { name: SkillName.TS, level: '' },
  { name: SkillName.JS, level: '' },
  { name: SkillName.REACT, level: '' },
  { name: SkillName.SITECORE, level: '' }
];


export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref([{
    id: '1', name: 'John', surname: 'Doe', position: 'Developer', email: 'johndoe@cap.com', skills: [
      { name: SkillName.JAVA, level: '' },
      { name: SkillName.DOTNET, level: '' },
      { name: SkillName.ANGULAR, level: SkillLevel.BEGINNER },
      { name: SkillName.VUEJS, level: SkillLevel.BEGINNER },
      { name: SkillName.TS, level: '' },
      { name: SkillName.JS, level: SkillLevel.BEGINNER },
      { name: SkillName.REACT, level: '' },
      { name: SkillName.SITECORE, level: '' }]
  },
  {
    id: '2', name: 'John', surname: 'Dlunt', position: 'Tester', email: 'emilyblunt@cap.com', skills: [
      { name: SkillName.JAVA, level: SkillLevel.BEGINNER },
      { name: SkillName.DOTNET, level: SkillLevel.BEGINNER },
      { name: SkillName.ANGULAR, level: '' },
      { name: SkillName.VUEJS, level: '' },
      { name: SkillName.TS, level: '' },
      { name: SkillName.JS, level: '' },
      { name: SkillName.REACT, level: SkillLevel.INTERMEDIATE },
      { name: SkillName.SITECORE, level: SkillLevel.BEGINNER }]
  },
  { id: '3', name: 'Jack', surname: 'Sparrow', position: 'Project Manager', email: 'jacksparrow@cap.com', skills: [] },
  {
    id: '4', name: 'Andrew', surname: 'Macdonald', position: 'Developer', email: 'am@cap.com', skills: [
      { name: SkillName.JAVA, level: SkillLevel.BEGINNER },
      { name: SkillName.DOTNET, level: '' },
      { name: SkillName.ANGULAR, level: SkillLevel.BEGINNER },
      { name: SkillName.VUEJS, level: '' },
      { name: SkillName.TS, level: SkillLevel.BEGINNER },
      { name: SkillName.JS, level: SkillLevel.BEGINNER },
      { name: SkillName.REACT, level: SkillLevel.INTERMEDIATE },
      { name: SkillName.SITECORE, level: '' }

    ]
  }]);

  const filterEmployee = computed(() => (nameInputValue, surnameInputValue, positionSelectValue) => employees.value.filter((employee) => {
    const employeesFilteredByName = employee.name.toLowerCase().includes(nameInputValue?.toLowerCase());
    const employeesFilteredBySurname = employee.surname.toLowerCase().includes(surnameInputValue?.toLowerCase());
    const employeesFilteredByPosition = employee.position.toLowerCase() === positionSelectValue;
    if (!positionSelectValue) { return employeesFilteredByName && employeesFilteredBySurname }
    return employeesFilteredByName && employeesFilteredBySurname && employeesFilteredByPosition;
  }
  )
  )

  function deleteEmployees(deleteEmployeesIds) {
    employees.value = employees.value.filter(employee => !deleteEmployeesIds.includes(employee.id));
  }

  function addEmployee(employee) {
    employees.value.push(employee);
  }

  function editEmployee(editedEmployeeValues, editedEmployeeId) {
    // console.log(editedEmployeeValues,editedEmployeeId)
    const employee = getEmployee(editedEmployeeId);
    employee.name = editedEmployeeValues.name;
    employee.surname = editedEmployeeValues.surname;
    employee.email = editedEmployeeValues.email;
    employee.position = editedEmployeeValues.position;
    employee.skills = editedEmployeeValues.skills;
  }

  function getEmployee(employeeId) {
    return employees.value.find((employee) => employee.id === employeeId);
  }

  return { employees, filterEmployee, deleteEmployees, addEmployee, getEmployee, editEmployee };
});
