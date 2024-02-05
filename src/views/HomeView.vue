<template>
  <div class="home page">
    <div class="breed-inputs">
      <select v-model="parent1">
        <option v-for="pal of palData.sort((a, b) => (a.name < b.name ? -1 : 1))" :value="pal.id">
          {{ pal.name }} ({{ pal.breedingPower }})
        </option>
      </select>
      <select v-model="parent2">
        <option v-for="pal of palData.sort((a, b) => (a.name < b.name ? -1 : 1))" :value="pal.id">
          {{ pal.name }} ({{ pal.breedingPower }})
        </option>
      </select>
      <button @click="breedPals" :disabled="parent1 < 0 || parent2 < 0">Breed</button>
    </div>
    <div v-if="result" class="result" :key="result.id">
      <PalAvatar :pal="result"></PalAvatar>
      <div>{{ result.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { palData } from "@/data/data";
import { breed } from "@/utils/utils";
import PalAvatar from "@/components/PalAvatar.vue";

const parent1 = ref(-1);
const parent2 = ref(-1);
const result = ref(null);

function breedPals() {
  result.value = breed(parent1.value, parent2.value);
}
</script>

<style scoped>
.home {
  padding: 0.5rem;
}
.result,
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result {
  margin-top: 1rem;
  color: white;
}
</style>
