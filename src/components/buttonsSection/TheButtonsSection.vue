<template>
    <div class="buttons-section">
        <BaseButton mode="btn--primary" @click="removeEmployees"
            :isDisabled="isFormOpen || props.amountOfSelectedItems === 0">Remove
        </BaseButton>
        <BaseButton mode="btn--primary" @click="openAddEmployeeForm"
            :isDisabled="isFormOpen || props.amountOfSelectedItems !== 0">Add
        </BaseButton>
        <BaseButton mode="btn--primary" @click="openEditEmployeeForm"
            :isDisabled="isFormOpen || props.amountOfSelectedItems !== 1">
            Edit
        </BaseButton>
    </div>
</template>

<script setup>
import BaseButton from '../UI/BaseButton.vue';
const emit = defineEmits(['remove-employees', 'open-employee-form']);
const props = defineProps({ amountOfSelectedItems: Number, isFormOpen: Boolean });

function removeEmployees() {
    emit('remove-employees');
}

function openAddEmployeeForm() {
    emit('open-employee-form', 'Add');
}

function openEditEmployeeForm() {
    emit('open-employee-form', 'Edit');
}


</script>

<style scoped lang="scss">
.buttons-section {
    display: flex;
    justify-content: flex-end;
    padding-right: 5rem;
}
</style>