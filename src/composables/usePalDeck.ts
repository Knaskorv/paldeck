import { palData } from "@/data/data";
import { computed, ref, watch } from "vue";
import { createBreedingLines } from "../utils/utils";

const STORAGE_ITEM_KEY = "deck";

export interface PalDeckInfo {
  id: number;
  m: boolean;
  f: boolean;
}

export interface Pal extends PalDeckInfo {
  name: string;
  number: number;
  range: number[];
  breedingPower: number;
  specialCombo: number[];
}

const palDeckInfo = ref<PalDeckInfo[]>([]);
const savedPalDeck = localStorage.getItem(STORAGE_ITEM_KEY);
if (savedPalDeck) {
  try {
    palDeckInfo.value = JSON.parse(savedPalDeck);
  } catch (e) {
    console.warn("Error parsing stored paldeck");
  }
}

function storePaldeck() {
  localStorage.setItem(STORAGE_ITEM_KEY, JSON.stringify(palDeckInfo.value));
}

watch(palDeckInfo, storePaldeck, { deep: true });
const palDeck = computed<Pal[]>(() =>
  palData.map((pal) => {
    const d = palDeckInfo.value.find((p) => p.id === pal.id);
    return { ...pal, m: !!d?.m, f: !!d?.f };
  })
);

const breedingLines = computed(() => createBreedingLines(palDeck.value));

const newPals = computed<number[]>(() =>
  breedingLines.value.reduce((acc: number[], curr) => {
    acc.push(...curr.newPals.map((n) => n.target));
    return acc;
  }, [])
);

export const usePalDeck = () => {
  const toggleGender = (palId: number, gender: "m" | "f") => {
    const pal = palDeckInfo.value.find((p) => p.id === palId);
    if (pal) {
      pal[gender] = !pal[gender];
    } else {
      palDeckInfo.value.push({ id: palId, m: false, f: false, [gender]: true });
    }
  };

  return { palDeck, breedingLines, newPals, toggleGender };
};
