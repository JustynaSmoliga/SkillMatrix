<template>
  <section class="employee-table">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Position</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <EmployeesTableListItem v-for="employee in props.employees" :key="employee.id" :employee="employee"
          :isCheckboxDisabled="props.areCheckboxesDisabled">
        </EmployeesTableListItem>
      </tbody>
    </table>

  </section>
</template>


<script setup>
import EmployeesTableListItem from './EmployeesTableListItem.vue'
const props = defineProps({ employees: Array, areCheckboxesDisabled: Boolean });
</script>


<style scoped lang="scss">
@import '../../assets/scss/variables';
$box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

table {
  border-collapse: collapse;
  box-shadow: $box-shadow;
  width: 100%;
  table-layout: fixed;
}

tr {
  border-bottom: $table-border;
}

th {
  border-left: $table-border;
  border-right: $table-border;
  height: 3em;
  color: $color-primary-lighten;
}
</style>
