<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import '../../assets/scss/variables';
$box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);


.base-card {
  margin: 1rem 2rem;
  border-radius: 12px;
  box-shadow:$box-shadow;
  padding: 1rem;
  background-color: $white;
  height: fit-content;
}
</style>
