<template>
  <div class="main-container">
    <div class="table-container">
      <BaseCard>
        <TheFilter @filter-employees="filter" @remove-filters="removeFilters" />
      </BaseCard>
      <BaseCard >
        <TheEmployeesTable :employees="filterEmployee(name, surname, position)"
          :toggleSelectedListItem="toggleSelectedListItem" :areCheckboxesDisabled="areCheckboxesDisabled"/>
      </BaseCard>
      <TheButtonsSection @remove-employees="removeEmployees" @open-employee-form="openForm" :isDisabled="isDisabled"/>
    </div>
    <BaseCard class="form-container" v-if="isFormOpen">
      <EmployeeForm :mode="employeeFormMode" :addEmployee="addEmployee" :onSubmitEditEmployee="onSubmitEditEmployee" :openForm="openForm" :closeForm="closeForm" :editedEmployee="editedEmployee"></EmployeeForm>
    </BaseCard>
  </div>
</template>

<script setup>
import { useEmployeeStore } from '@/stores/employeeStore.js';
import { storeToRefs } from 'pinia';
import { ref,computed } from 'vue';
import BaseCard from '../UI/BaseCard.vue';
import TheFilter from '../filter/TheFilter.vue';
import TheEmployeesTable from '../employeesTable/TheEmployeesTable.vue';
import TheButtonsSection from '../buttonsSection/TheButtonsSection.vue';
import EmployeeForm from '../employeeForm/EmployeeForm.vue';

const employees = useEmployeeStore();
const { filterEmployee } = storeToRefs(employees);
const name = ref('');
const surname = ref('');
const position = ref('');
const selectedListItemIds = ref([]);
const isFormOpen=ref(false);
const employeeFormMode=ref('Add');
let editedEmployee;


const isDisabled=computed(()=>{
  const isExactlyOneEmplyeeSelected = selectedListItemIds.value.length===1;
  return !isExactlyOneEmplyeeSelected;
})

const areCheckboxesDisabled=computed(()=>{
  return isFormOpen.value&&employeeFormMode.value==='Edit';
})

function filter(filteredName, filteredSurname, filteredPosition) {
  name.value = filteredName;
  surname.value = filteredSurname;
  position.value = filteredPosition;
}

function removeFilters() {
  name.value = '';
  surname.value = '';
  position.value = '';
}

function toggleSelectedListItem(isChecked, listItemId) {
  if (isChecked) {
    const isIdAlreadySelected = selectedListItemIds.value.includes(listItemId);
    if (!isIdAlreadySelected) selectedListItemIds.value.push(listItemId);

  } else {
    selectedListItemIds.value = selectedListItemIds.value.filter((id) => listItemId !== id);
  }
}

function removeEmployees() {
  employees.deleteEmployees(selectedListItemIds.value);
}

function addEmployee(employee){
  employees.addEmployee(employee);
}

function onSubmitEditEmployee(editedEmployeeValues, editedEmployeeId){
  employees.editEmployee(editedEmployeeValues, editedEmployeeId);
}

function openForm(mode){

  closeForm();
  employeeFormMode.value=mode;

  if(mode==='Edit'){
    editedEmployee=employees.getEmployee(selectedListItemIds.value[0]);
    
  }

  if(mode==='Edit'&&isDisabled.value){
    closeForm();
    return;
  }
  isFormOpen.value=true;
}
function closeForm(){
  isFormOpen.value=false;
}

</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
}

.table-container {
  width: 80%;

}



.form-container {
  width: 20%;
}
</style>
