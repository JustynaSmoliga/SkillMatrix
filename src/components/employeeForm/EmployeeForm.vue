<template>
    <form class="form" @submit.prevent="onSubmit">
        <h2 class="form__header" v-if="mode === 'Add'">
            Add new record
        </h2>
        <h2 class="form__header" v-else>
            Edit
        </h2>
        <div class="form__controls">
            <div class="form__control">
                <label for="name" class="form__label"> Name: </label>
                <input type="text" id="name" class="form__input" v-model="name" v-bind="nameAttrs">
                <p>{{ errors.name }}</p>
            </div>
            <div class="form__control">
                <label for="surname" class="form__label"> Surname: </label>
                <input type="text" id="surname" class="form__input" v-model="surname" v-bind="surnameAttrs">
                <p>{{ errors.surname }}</p>

            </div>
            <div class="form__control">
                <label for="position" class="form__label"> Position: </label>
                <select id="position" class="form__input" v-model="position" v-bind="positionAttrs">
                    <option value="developer">Developer</option>
                    <option value="tester">Tester</option>
                    <option value="project manager">Project Manager</option>
                    <option value="analyst">Business Analyst</option>
                </select>
            </div>
            <div class="form__control">
                <label for="email" class="form__label"> Email: </label>
                <input type="email" id="email" class="form__input" v-model="email" v-bind="emailAttrs">
                <p>{{ errors.email }}</p>
            </div>
            <div class="form__skills">
                <SkillSelect v-for="(field, idx) in fields" name="skills" :key="field.key" @skill-selected="selectSkill"
                    v-model:level="field.value.level" :nameOfSkill="field.value.name" :id="idx"></SkillSelect>
            </div>
        </div>
        <div class="form__buttons">
            <BaseButton :type="submit" mode="btn--primary">{{ props.mode }}</BaseButton>
            <BaseButton :type="button" mode="btn--secondary" @click="props.closeForm">Close</BaseButton>
        </div>
    </form>
    <pre>VALUES: {{ values }}</pre>
    <pre>ERRORS: {{ errors }}</pre>
</template>

<script setup>
import { useForm, useFieldArray } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { ref } from 'vue';
import { employeeSkills } from '@/stores/employeeStore';
import BaseButton from '../UI/BaseButton.vue';
import SkillSelect from './SkillSelect.vue';

const props = defineProps({ mode: String, addEmployee: Function, onSubmitEditEmployee: Function, openForm: Function, closeForm: Function, editedEmployee: Object })

const { values, errors, defineField, handleSubmit } = useForm({
    validationSchema: toTypedSchema(yup.object({
        name: yup.string().required().min(3),
        surname: yup.string().required().min(3),
        email: yup.string().email().required(),
    }),),
    initialValues: {
        name: props.editedEmployee ? props.editedEmployee.name : '',
        surname: props.editedEmployee ? props.editedEmployee.surname : '',
        email: props.editedEmployee ? props.editedEmployee.email : '',
        position: props.editedEmployee ? props.editedEmployee.position.toLowerCase() : 'developer',
        skills: props.editedEmployee ? props.editedEmployee.skills : employeeSkills
    }
});
const [name, nameAttrs] = defineField('name', state => { return { validateOnModelUpdate: state.errors.length > 0 } });
const [surname, surnameAttrs] = defineField('surname');
const [email, emailAttrs] = defineField('email');
const [position, positionAttrs] = defineField('position');
const { fields, update } = useFieldArray('skills');


const onSubmit = handleSubmit(values => {
    props.mode === 'Add' ? submitAddEmployeeForm(values) : submitEditEmployeeForm(values);
});

function submitAddEmployeeForm(values) {
    const newEmployee = { id: Date.now(), name: values.name, surname: values.surname, position: values.position, email: values.email, skills: values.skills };
    props.addEmployee(newEmployee);
    props.closeForm();
}

function submitEditEmployeeForm(values) {

    alert('edit form submitted');
    props.onSubmitEditEmployee(values, props.editedEmployee.id);
    props.closeForm();
}

function selectSkill(skillName, selectedValue, id) {
    const selectedSkillObject = { name: skillName, level: selectedValue };
    update(id, selectedSkillObject);
}

</script>

<style scoped lang="scss">
@import '../../assets/scss/_variables.scss';



.form {
    display: flex;
    flex-direction: column;

    &__header {
        display: flex;
        align-items: baseline;
        color: $color-primary-darker;
        font-weight: bold;
        padding-left: 1rem;
        padding-bottom: 1.5rem;
    }

    &__control {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__label {
        color: $color-primary-lighten;
        font-weight: bold;
        padding-left: 1rem;
        display: block;
        text-transform: uppercase;
        align-self: flex-start;
    }

    &__input {
        border: 1px solid $color-primary-lighten;
        border-radius: 5px;
        height: 1.5rem;
        width: 90%;
        margin: 0.5rem 0.5rem;
        color: $color-primary-darker;

        &:focus {
            outline: none;
            background-color: $input-focus-background-color;
            color: $color-primary-darker;

        }
    }

    &__skills {
        display: flex;
        flex-wrap: wrap;
        padding: 1rem 1rem;
    }

    &__buttons {
        display: flex;
        justify-content: center
    }
}
</style>