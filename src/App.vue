<template>
  <div class="app">
    <Header />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  overflow: auto;
}
</style>
