<template>
  <div class="controls">
    <input v-model="filter" />
    <div>
      <input type="radio" v-model="pick" value="id" />
      <input type="radio" v-model="pick" value="breedingPower" />
      <input type="radio" v-model="pick" value="name" />
    </div>
  </div>
  <div class="pal-deck">
    <PalCard v-for="pal in sortedPals" :key="pal.id" :pal="pal" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import PalCard from "./PalCard.vue";
import { usePalDeck } from "../composables/usePalDeck";

const { palDeck } = usePalDeck();

const filter = ref("");
const pick = ref("id");

const sortedPals = computed(() =>
  [...palDeck.value]
    .sort((a: any, b: any) => (a[pick.value] > b[pick.value] ? 1 : -1))
    .filter((p) => p.name.toLowerCase().includes(filter.value))
);
</script>

<style scoped>
.controls {
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  justify-content: space-between;
}
.pal-deck {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}
</style>
