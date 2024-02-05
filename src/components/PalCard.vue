<template>
  <div
    class="pal-card"
    :class="{
      full: pal.m && pal.f,
      partial: pal.m !== pal.f,
      breedable: newPals.includes(pal.id),
    }"
  >
    <div class="pal-avatar">
      <PalAvatar :pal="pal"></PalAvatar>
    </div>
    <div class="pal-info">
      <div>{{ pal.name }}</div>
      <div class="gender-container">
        <GenderIcon @click="toggleGender(pal.id, 'f')" :gender="0" :active="pal.f"></GenderIcon>
        <GenderIcon @click="toggleGender(pal.id, 'm')" :gender="1" :active="pal.m"></GenderIcon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePalDeck } from "../composables/usePalDeck";
import GenderIcon from "./GenderIcon.vue";
import PalAvatar from "./PalAvatar.vue";

const { toggleGender, newPals } = usePalDeck();
defineProps(["pal"]);
</script>

<style scoped>
.pal-card {
  font-weight: 600;
  display: flex;

  gap: 0.5rem;
  border: solid rgba(0, 0, 0, 0.3) 1px;
  /* background-color: rgb(110, 110, 110); */
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  align-items: center;
  height: 50px;
}

.pal-card.full,
.pal-card.partial {
  background-color: rgb(240, 240, 240);
}

.pal-card.breedable {
  background-color: rgb(255, 236, 179);
}

.pal-info {
  padding: 0.5rem;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.gender-container {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
}

.pal-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 80%;
}
</style>
