<template>
    <tr @click="toggleUserSkills" class="employee-table__item">
        <td><input type='checkbox' v-model="isChecked" @click="toggleItemSelected" :disabled="props.isCheckboxDisabled"></td>
        <td>{{ props.employee.id }}</td>
        <td>{{ props.employee.name }}</td>
        <td>{{ props.employee.surname }}</td>
        <td>{{ props.employee.position }}</td>
        <td>{{ props.employee.email }}</td>
    </tr>
    <SkillsSection v-if="areSkillsShown" :skills="props.employee.skills.filter(skill => skill.level)" />

</template>

<script setup>
import { ref } from 'vue'
import SkillsSection from '@/components/employeesTable/SkillsSection.vue';
let areSkillsShown = ref(false);

const props = defineProps({ employee: {}, isCheckboxDisabled:Boolean })
const emit = defineEmits(['toggle-selected-items']);
const isChecked = ref(false);

function toggleUserSkills(event) {
    if (event.target.nodeName === 'TD') {
        areSkillsShown.value = !areSkillsShown.value;
    } else {
        return;
    }
}

function toggleItemSelected() {
    isChecked.value = !isChecked.value;
    emit('toggle-selected-items', isChecked.value, props.employee.id)
}

</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';
$background-color-item:#eff6fd;

.employee-table__item {

    &:hover{
    background-color: $background-color-item;
    cursor: pointer;
    }
   
}

td {
    border-left: $table-border;
    border-right: $table-border;
    height: 2em;
    word-wrap: break-word;
}
</style>