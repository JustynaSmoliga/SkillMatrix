<template>
  <div>
    <button :type="props.type" :class="props.mode" class="btn" :disabled="props.isDisabled">
      <slot>
      </slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ type: String, mode: String, isDisabled: Boolean });

</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';

.btn {
  padding: 0.75rem 1.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  font-family: inherit;
  border-radius: 20px;
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  min-width: 7rem;

  &:disabled,
  &:disabled:hover {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &--primary {
    background-color: $color-primary;
    border: 1.5px solid $color-primary;
    color: $white;

    &:hover,
    &:active {
      background-color: $color-primary-darker;
      border-color: $color-primary-darker;
    }

    &:disabled,
    &:disabled:hover {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  &--secondary {
    background-color: $white;
    color: $color-primary-darker;

    border: 1.5px solid $color-primary;

    &:hover,
    &:active {
      background-color: $color-primary;
      border: 1.5px solid $color-primary;
      color: $white;
    }
  }
}
</style>