<template>
  <div v-if="!pal">No pal</div>
  <div v-else class="pal page">
    <BreedCombination v-for="line of lines.newPals" :parents="line"></BreedCombination>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { usePalDeck } from "@/composables/usePalDeck";

import BreedCombination from "@/components/BreedingLine/BreedCombination.vue";

const { palDeck, breedingLines } = usePalDeck();
const route = useRoute();
const pal = palDeck.value.find((p) => p.id === Number(route.params.id));
const lines = breedingLines.value.reduce(
  (acc: any, curr) => {
    acc.genderComplete.push(...curr.genderComplete.filter((g) => g.target === pal?.id).flatMap((r) => r.combinations));
    acc.newPals.push(...curr.newPals.filter((g) => g.target === pal?.id).flatMap((r) => r.combinations));
    return acc;
  },
  { genderComplete: [], newPals: [] }
);
</script>

<style scoped>
.pal {
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}
</style>
