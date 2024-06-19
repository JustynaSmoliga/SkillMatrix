<template>
    <tr class="skills-section" data-test="skills-section">
        <td class="skills-section__td">
            <p v-if="props.skills.length === 0" class="skills-section__paragraph" data-test="paragraph">No skills added
            </p>
            <SkillButton v-else v-for="skill in props.skills" :key="skill.name" :name="skill.name" :level="skill.level"
                data-test="skill-button">
            </SkillButton>
        </td>
    </tr>
</template>

<script setup>
import SkillButton from './SkillButton.vue';

const props = defineProps({ skills: Array })

</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';

.skills-section {
    border-top: $table-border;
    border-bottom: $table-border;
    flex-wrap: wrap;
    width: inherit;

    &__td {
        display: flex;
        flex-direction: row;
        padding: 1em;
    }

    &__paragraph {
        font-size: 0.85rem;
    }
}
</style>
