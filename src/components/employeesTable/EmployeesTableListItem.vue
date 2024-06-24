<template>
    <tr @click="toggleUserSkills" class="employee-table__item" data-test="table-item">
        <td><input type='checkbox' v-model="isChecked" @click="toggleItemSelected" :disabled="props.isCheckboxDisabled"
                data-test="table-checkbox">
        </td>
        <td data-test="table-td">{{ props.employee.id }}</td>
        <td>{{ props.employee.name }}</td>
        <td>{{ props.employee.surname }}</td>
        <td>{{ props.employee.position }}</td>
        <td>{{ props.employee.email }}</td>
    </tr>
    <SkillsSection v-if="areSkillsShown" :skills="props.employee.skills.filter(skill => skill.level)"
        data-test="skills-section" />

</template>

<script setup>
import { ref, inject } from 'vue'
import SkillsSection from '@/components/employeesTable/SkillsSection.vue';
let areSkillsShown = ref(false);

const props = defineProps({ employee: {}, isCheckboxDisabled: Boolean })
const toggleSelectedListItem = inject('toggleSelectedListItem');
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
    toggleSelectedListItem(props.employee.id);

}

</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';
$background-color-item: #eff6fd;

.employee-table__item {
    transition: background-color 0.2s ease;

    &:hover {
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