<template>
  <div class="generation">
    <div class="generation-header">Gen {{ genid }}</div>

    <div class="generation-container">
      <div v-if="generation.genderComplete.length">
        <div class="line-header">Gender complete</div>
        <div class="lines-container">
          <Lines v-for="line of generation.genderComplete" :line="line" />
        </div>
      </div>

      <div v-if="generation.newPals.length">
        <div class="line-header">New Pals</div>
        <div class="lines-container">
          <Lines v-for="line of generation.newPals" :line="line" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Lines from "./Lines.vue";
defineProps(["generation", "genid"]);
</script>

<style scoped>
.lines-container {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}
.generation {
  display: flex;
}

.generation-container {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.line-header {
  margin-bottom: 0.5rem;
}

.generation-header {
  background: rgb(255, 72, 72);
  margin-right: 0.5rem;
  width: 15px;
  font-size: 0.7rem;
  text-align: center;
  writing-mode: vertical-lr;
  text-orientation: upright;
}
</style>
