<template>
  <header>
    <div class="nav-bar">
      <router-link tag="li" to="/">Home</router-link>
      <router-link tag="li" to="/paldeck">Paldeck</router-link>
      <router-link tag="li" to="/planner">Planner</router-link>
    </div>
    <div>{{ newPals.length }} New Pals Available!</div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { usePalDeck } from "../composables/usePalDeck";
const { newPals } = usePalDeck();
</script>

<style scoped>
header {
  background: purple;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2rem;
  padding: 0.5rem;
}

.nav-bar {
  display: flex;
  gap: 0.5rem;
}
</style>
