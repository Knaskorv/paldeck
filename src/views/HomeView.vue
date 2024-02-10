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

    <div>
      <select v-model="from">
        <option v-for="pal of palData.sort((a, b) => (a.name < b.name ? -1 : 1))" :value="pal.id">
          {{ pal.name }} ({{ pal.breedingPower }})
        </option>
      </select>
      <select v-model="to">
        <option v-for="pal of palData.sort((a, b) => (a.name < b.name ? -1 : 1))" :value="pal.id">
          {{ pal.name }} ({{ pal.breedingPower }})
        </option>
      </select>
      <button @click="calculatePath" :disabled="from < 0 || to < 0">Calculate</button>
    </div>
    <div :key="`${from}-${to}`">
      <div class="path" v-for="path of paths">
        <div class="step" v-for="(step, i) of path">
          <div class="step-pal" v-for="(pal, j) of step">
            <div class="arrow" v-if="i || j">{{ j ? "+" : "➤" }}</div>
            <div class="avatar">
              <PalAvatar :key="pal" :pal="palData.find((p) => p.id === pal)"></PalAvatar>
              <div>{{ palData.find((p) => p.id === pal)?.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { palData } from "@/data/data";
import { breed, findPath } from "@/utils/utils";
import PalAvatar from "@/components/PalAvatar.vue";
import { usePalDeck } from "../composables/usePalDeck";

const { palDeck } = usePalDeck();

const parent1 = ref(-1);
const parent2 = ref(-1);
const from = ref(-1);
const to = ref(-1);
const result = ref();
const paths = ref([]);

function breedPals() {
  result.value = breed(parent1.value, parent2.value);
}

function calculatePath() {
  paths.value = findPath(from.value, to.value, palDeck.value);
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

.path {
  display: flex;
  margin-bottom: 2rem;
}

.result {
  margin-top: 1rem;
  color: white;
}

.pal {
  height: 40px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  font-size: 0.8rem;
}

.step-pal {
  height: 50px;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;
}

.arrow {
  color: white;
  margin: 0.5rem;
}

.step {
  display: flex;
}

.avatar {
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  font-size: 0.7rem;
  text-align: center;
}
.pal-grid {
  width: 100%;
  flex: 1 0 auto;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
}
</style>
