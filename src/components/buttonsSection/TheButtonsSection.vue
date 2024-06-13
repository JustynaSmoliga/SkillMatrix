<template>
    <div class="buttons-section">
        <BaseButton mode="btn--primary" @click="removeEmployees">Remove</BaseButton>
        <BaseButton mode="btn--primary" @click="openAddEmployeeForm">Add</BaseButton>
        <BaseButton mode="btn--primary" @click="openEditEmployeeForm" :isDisabled="props.isDisabled">Edit</BaseButton>
    </div>
</template>

<script setup>
import BaseButton from '../UI/BaseButton.vue';
const emit = defineEmits(['remove-employees', 'open-employee-form']);
const props=defineProps({isDisabled:Boolean});

function removeEmployees() {
    emit('remove-employees');
}

function openAddEmployeeForm() {
    emit('open-employee-form', 'Add');
}

function openEditEmployeeForm() {
    if(props.isDisabled===false){
        emit('open-employee-form', 'Edit');
    }
    return;
}

</script>

<style scoped lang="scss">
.buttons-section {
    display: flex;
    justify-content: flex-end;
    padding-right: 5rem;
}
</style>