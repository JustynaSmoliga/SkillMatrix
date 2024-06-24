<template>
        <form class="filter" @submit.prevent="filterEmployees()">
                <div class="filter__controls">
                        <div class="filter__header">
                                <h2>Filters</h2>
                                <!-- <div class="filter__arrow"></div> -->
                        </div>
                        <div>
                                <label for="filter-name" class="filter__label"> BY NAME: </label>
                                <input type="text" id="filter-name" class="filter__input" v-model="name"
                                        data-test="filter-name-input">
                        </div>
                        <div>
                                <label for="filter-surname" class="filter__label"> BY SURNAME: </label>
                                <input type="text" id="filter-surname" class="filter__input" v-model="surname"
                                        data-test="filter-surname-input">
                        </div>
                        <div>
                                <label for="filter-position" class="filter__label"> BY POSITION: </label>
                                <select id="filter-position" class="filter__input" v-model="position"
                                        data-test="filter-position-select">
                                        <option value=''></option>
                                        <option value="developer">Developer</option>
                                        <option value="tester">Tester</option>
                                        <option value="project manager">Project Manager</option>
                                        <option value="analyst">Business Analyst</option>
                                </select>
                        </div>
                </div>
                <div class="filter__buttons">
                        <BaseButton mode="btn--primary" data-test="filter-btn">Filter</BaseButton>
                        <BaseButton mode="btn--secondary" type="button" @click="removeFilters">Remove filters
                        </BaseButton>
                </div>


        </form>
</template>

<script setup>
import BaseButton from '../UI/BaseButton.vue';
import { ref } from 'vue';

const name = ref('');
const surname = ref('')
const position = ref('');
const emit = defineEmits(['filter-employees', 'remove-filters']);

function filterEmployees() {
        emit('filter-employees', name.value, surname.value, position.value);
}

function removeFilters() {
        name.value = '';
        surname.value = '';
        position.value = '';
        emit('remove-filters');
}

</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';

.filter {
        display: flex;
        flex-direction: column;

        &__controls {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                padding: 0.5rem 4rem;
        }

        &__buttons {
                display: flex;
                align-self: flex-end;
                padding-right: 4rem;
                padding-top: 2rem;
        }

        &__header {
                display: flex;
                align-items: baseline;
                color: $color-primary-darker;
                font-weight: bold;
                padding-right: 0.5rem;
        }

        &__arrow {
                width: 0px;
                height: 0px;
                border-style: solid;
                border-width: 0 15px 15px 15px;
                border-color: transparent transparent $color-primary-darker transparent;
                transform: rotate(0deg);
        }

        &__label {
                color: $color-primary-lighten;
                font-weight: bold;
                padding-right: 0.5rem;
        }

        &__input {
                border: 1px solid $color-primary-lighten;
                border-radius: 5px;
                height: 1.5rem;

                &:focus {
                        outline: none;
                        background-color: $input-focus-background-color;
                }

        }
}
</style>