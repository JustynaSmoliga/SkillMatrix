<template>
    <div class="buttons-section">
        <BaseButton mode="btn--primary" data-test="btn-remove" @click="openModalWindow"
            :isDisabled="isFormOpen || props.amountOfSelectedItems === 0">Remove
        </BaseButton>
        <BaseButton mode="btn--primary" data-test="btn-add" @click="openAddEmployeeForm"
            :isDisabled="isFormOpen || props.amountOfSelectedItems !== 0">Add
        </BaseButton>
        <BaseButton mode="btn--primary" data-test="btn-edit" @click="openEditEmployeeForm"
            :isDisabled="isFormOpen || props.amountOfSelectedItems !== 1">
            Edit
        </BaseButton>
        <ModalWindow v-if="isModalWindowOpen" @close="closeModalWindow">
            <template #default>
                <p>Are you really want to remove the employees?</p>
                <p> This action is irreversible, all data will lost.</p>
            </template>
            <template #actions>
                <BaseButton mode="btn--primary" @click='removeEmployees'>Yes</BaseButton>
                <BaseButton mode="btn--secondary" @click='closeModalWindow'>No</BaseButton>
            </template>
        </ModalWindow>
    </div>
</template>

<script setup>
import BaseButton from '../UI/BaseButton.vue';
import ModalWindow from '../UI/ModalWindow.vue';
import { ref } from 'vue';

const emit = defineEmits(['remove-employees', 'open-employee-form']);
const props = defineProps({ amountOfSelectedItems: Number, isFormOpen: Boolean });
const isModalWindowOpen = ref(false);


function removeEmployees() {
    emit('remove-employees');
    closeModalWindow();

}

function openAddEmployeeForm() {
    emit('open-employee-form', 'Add');
}

function openEditEmployeeForm() {
    emit('open-employee-form', 'Edit');
}

function openModalWindow() {
    isModalWindowOpen.value = true;
}

function closeModalWindow() {
    isModalWindowOpen.value = false;
}

</script>

<style scoped lang="scss">
.buttons-section {
    display: flex;
    justify-content: flex-end;
    padding-right: 5rem;
}
</style>