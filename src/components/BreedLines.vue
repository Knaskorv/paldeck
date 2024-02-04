<template>
  <div class="breed-lines">
    <div v-for="(generation, i) of breedingLines">
      <Generation :generation="generation" :genid="i + 1"></Generation>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { usePalDeck, type Pal } from "../composables/usePalDeck";
import PalCard from "./PalCard.vue";
import Generation from "./BreedingLine/Generation.vue";

const { breedingLines } = usePalDeck();

watch(breedingLines, () => console.log(breedingLines.value));
</script>

<style scoped>
.breed-lines {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
