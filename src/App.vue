<template>
  <div class="container">
    <TheHeader />
    <SkillMatrix />
  </div>
</template>

<script setup>
import TheHeader from './components/header/TheHeader.vue'
import SkillMatrix from './components/skillMatrix/SkillMatrix.vue';
</script>

<style lang="scss">
@import "assets/scss/variables";

$container-color: #F1F6FF;


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary-darker;
}

* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: $container-color;
  overflow-y: scroll;
}
</style>
