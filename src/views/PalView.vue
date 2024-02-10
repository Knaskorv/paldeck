<template>
  <div class="missing" v-if="!pal">What the fauck! There's no pal with this id :(</div>
  <div v-else class="page">
    <div class="pal-info">
      <PalAvatar :pal="pal"></PalAvatar>
      <div>#{{ pal.number }} {{ pal?.name }} ({{ pal.breedingPower }})</div>
    </div>

    <div class="header">Combinations ({{ allComb.length }})</div>
    <div class="pal">
      <BreedCombination
        v-for="line of allComb"
        :parents="line"
        :class="{ available: availableComb.some((c) => line.every((l) => c.includes(l))) }"
      ></BreedCombination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { usePalDeck } from "@/composables/usePalDeck";

import BreedCombination from "@/components/BreedingLine/BreedCombination.vue";
import { computed } from "vue";
import { getPossibleCombinations } from "@/utils/utils";
import { palData } from "@/data/data";
import PalAvatar from "@/components/PalAvatar.vue";

const { palDeck, breedingLines } = usePalDeck();

const route = useRoute();
const pal = palDeck.value.find((p) => p.id === Number(route.params.id));

const allComb = getPossibleCombinations(
  Number(route.params.id),
  palData.map((p) => ({ ...p, m: true, f: true }))
);

const availableComb = getPossibleCombinations(Number(route.params.id), palDeck.value);
</script>

<style scoped>
.pal {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}

.page {
  padding: 0.5rem;
}

.missing {
  padding-top: 2rem;
  color: white;
  font-size: 1.4rem;
  text-align: center;
}
.header {
  color: white;
  padding: 0.5rem 0;
}

.pal-info {
  color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.combination.available {
  background: rgb(255, 236, 179);
}
</style>
