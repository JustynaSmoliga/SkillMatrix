<template>
  <div class="btn">
    <button class="btn--primary">{{ props.name }}</button>
    <span class="btn--primary__tooltiptext">{{ props.level }}</span>
  </div>
</template>

<script setup>
const props = defineProps({ name: String, level: String });

</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";

.btn {
  position: relative;
  display: flex;

  &--primary {
    padding: 0.75rem 1.5rem;
    margin-top: 1em;
    margin-right: 2em;
    font-family: inherit;
    background-color: transparent;
    border: 1.5px solid $color-primary;
    border-radius: 20px;
    color: $color-primary;
    cursor: pointer;
    height: fit-content;
    width: fit-content;

    &:hover,
    &:active {
      background-color: $color-primary;
      border-color: $color-primary;
      color: $white;
    }

    &__tooltiptext {
      visibility: hidden;
      width: 120px;
      color: $color-primary;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      font-size: 0.8rem;
      position: absolute;
      z-index: 1;
      bottom: 85%;
      left: 50%;
      margin-left: -70px;
    }
  }

  &:hover .btn--primary__tooltiptext {
    visibility: visible;
  }
}
</style>
