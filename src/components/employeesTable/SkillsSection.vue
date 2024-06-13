<template>
    <tr>
        <td>
            <SkillButton v-for="skill in props.skills" :key="skill.name" :name="skill.name" :level="skill.level"> </SkillButton>
        </td>
    </tr>
</template>

<script setup>
import SkillButton from './SkillButton.vue';
import {SkillLevel, SkillName} from '@/stores/employeeStore';

const props = defineProps({ skills:{type:Array, default:()=>[{name:SkillName.NONE, level:SkillLevel.NONE}]} })




</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';
td{
    display: flex;
    flex-direction: row;
    min-height: 5em;
    padding: 1em;

    
}
tr{
  border-top: $table-border;
  border-bottom: $table-border;
  flex-wrap: wrap;
  width: inherit;

}
</style>
