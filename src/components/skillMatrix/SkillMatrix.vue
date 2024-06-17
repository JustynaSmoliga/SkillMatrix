<template>
  <div class="main-container">
    <div class="table-container">
      <BaseCard>
        <TheFilter @filter-employees="filter" @remove-filters="removeFilters" />
      </BaseCard>
      <BaseCard>
        <TheEmployeesTable :employees="filterEmployee(nameFilter, surnameFilter, positionFilter)"
          :areCheckboxesDisabled="areCheckboxesDisabled" />
      </BaseCard>
      <TheButtonsSection @remove-employees="removeEmployees" @open-employee-form="openForm"
        :amountOfSelectedItems="selectedListItemIds.length" :isFormOpen="isFormOpen" />
    </div>
    <BaseCard class="form-container" v-if="isFormOpen">
      <EmployeeForm :mode="employeeFormMode" :editedEmployee @add-employee="addEmployee" @edit-employee="editEmployee"
        @close-form="closeForm">
      </EmployeeForm>
    </BaseCard>
  </div>
</template>

<script setup>
import { useEmployeeStore } from '@/stores/employeeStore.js';
import { storeToRefs } from 'pinia';
import { ref, computed, provide } from 'vue';
import BaseCard from '../UI/BaseCard.vue';
import TheFilter from '../filter/TheFilter.vue';
import TheEmployeesTable from '../employeesTable/TheEmployeesTable.vue';
import TheButtonsSection from '../buttonsSection/TheButtonsSection.vue';
import EmployeeForm from '../employeeForm/EmployeeForm.vue';

const employees = useEmployeeStore();
const { filterEmployee } = storeToRefs(employees);
const nameFilter = ref('');
const surnameFilter = ref('');
const positionFilter = ref('');
const selectedListItemIds = ref([]);
const isFormOpen = ref(false);
const employeeFormMode = ref('Add');
provide('toggleSelectedListItem', toggleSelectedListItem);

const editedEmployee = computed(() => {
  return employees.getEmployee(selectedListItemIds.value[0]);
})

const areCheckboxesDisabled = computed(() => {
  return isFormOpen.value;
})

function filter(filteredName, filteredSurname, filteredPosition) {
  nameFilter.value = filteredName;
  surnameFilter.value = filteredSurname;
  positionFilter.value = filteredPosition;
}

function removeFilters() {
  nameFilter.value = '';
  surnameFilter.value = '';
  positionFilter.value = '';
}

function toggleSelectedListItem(listItemId) {
  const isIdAlreadySelected = selectedListItemIds.value.includes(listItemId);
  if (!isIdAlreadySelected) {
    selectedListItemIds.value.push(listItemId);

  } else {
    selectedListItemIds.value = selectedListItemIds.value.filter((id) => listItemId !== id);
  }
}

function removeEmployees() {
  employees.deleteEmployees(selectedListItemIds.value);
  selectedListItemIds.value = [];
}

function addEmployee(employee) {
  employees.addEmployee(employee);
  closeForm();
}

function editEmployee(editedEmployeeValues, editedEmployeeId) {
  employees.editEmployee(editedEmployeeValues, editedEmployeeId);
  closeForm();
}

function openForm(mode) {
  closeForm();
  employeeFormMode.value = mode;
  isFormOpen.value = true;
}

function closeForm() {
  isFormOpen.value = false;
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
