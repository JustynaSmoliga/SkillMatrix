<template>
  <select :class="[{ 'select--active': isChecked }, { 'select--short': !level }, 'select']" @change="toggleChecked"
    v-model="level" data-test="skill-select">
    <option value='' selected :hidden=!isChecked>{{ level ? '❌' : nameOfSkill }}</option>
    <option value="beginner">{{ nameOfSkill }} - {{ SkillLevel.BEGINNER }}</option>
    <option value="intermediate">{{ nameOfSkill }} - {{ SkillLevel.INTERMEDIATE }}</option>
    <option value="advanced">{{ nameOfSkill }} - {{ SkillLevel.ADVANCED }}</option>
  </select>
</template>

<script setup>
import { ref, defineModel } from 'vue';
import { SkillLevel } from '@/stores/employeesStore';
const props = defineProps({ id: String, nameOfSkill: String })
const level = defineModel('level');

const isChecked = ref(level.value !== '' ? true : false);


const emit = defineEmits(['skill-selected']);

function toggleChecked() {
  if (level.value !== '') {
    isChecked.value = true;
    emit('skill-selected', props.nameOfSkill, level.value, props.id);

  } else {
    isChecked.value = false;
  }
}


</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';

.select {
  padding: 0.2rem 0.2rem;
  margin-top: 0.5em;
  margin-right: 0.5em;
  font-family: inherit;
  border-radius: 20px;
  cursor: pointer;
  text-align-last: center;
  text-overflow: ellipsis;
  max-width: 10rem;
  background-color: $white;
  color: $color-primary-darker;
  border: 1.5px solid $color-primary;
  transition: background-color 0.2s ease;


  &:hover,
  &:active {
    background-color: $input-focus-background-color;
    border: 1.5px solid $color-primary;
  }

  &:focus {
    outline: none;
  }

  &--short {
    width: 6.5rem;
  }

  &--active {
    background-color: $input-focus-background-color;
    border: 1.5px solid $color-primary;
  }
}
</style>
