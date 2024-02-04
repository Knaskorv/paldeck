<template>
  <router-link tag="div" :to="`/pal/${target?.id}`" class="line">
    <div class="avatar">
      <PalAvatar :pal="target"></PalAvatar>
    </div>
    <div>
      <div>{{ target?.name }}</div>
      <div class="combination">
        {{ line.combinations.length }} {{ `combination${line.combinations.length > 1 ? "s" : ""}` }}
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import PalAvatar from "../PalAvatar.vue";
import BreedCombination from "./BreedCombination.vue";
import { usePalDeck } from "@/composables/usePalDeck";
const props = defineProps(["line"]);

const { palDeck } = usePalDeck();
const target = palDeck.value.find((p) => p.id === props.line.target);
</script>

<style scoped>
.avatar {
  min-width: 60px;
  height: 70%;
}

.line {
  background: rgba(255, 255, 255, 0.4);
  color: black;
  border-radius: 5px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.line:hover {
  background: rgba(255, 255, 255, 1);
}

.combination {
  font-size: 0.7rem;
  font-weight: 100;
}
</style>
