<template>
  <div class="combination">
    <div class="parent">
      <div class="avatar"><PalAvatar :pal="parent1" /></div>
      <div>{{ parent1?.name }}</div>
    </div>
    <div>+</div>
    <div class="parent">
      <div class="avatar"><PalAvatar :pal="parent2" /></div>
      <div>{{ parent2?.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePalDeck } from "@/composables/usePalDeck";
import PalAvatar from "../PalAvatar.vue";
const { palDeck } = usePalDeck();
const props = defineProps(["parents"]);

const parent1 = palDeck.value.find((p) => p.id === props.parents[0]);
const parent2 = palDeck.value.find((p) => p.id === props.parents[1]);
</script>

<style scoped>
.combination {
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  height: 56px;
  gap: 0.5rem;
  font-size: 0.8rem;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 5px;
}

.avatar {
  height: 30px;
}

.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
