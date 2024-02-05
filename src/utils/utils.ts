import type { Pal } from "@/composables/usePalDeck";
import { palData } from "@/data/data";

function hasGenderMatch(palId1: number, palId2: number, deck: Pal[]) {
  const pal1 = deck.find((p) => p.id === palId1);
  const pal2 = deck.find((p) => p.id === palId2);
  return (pal1?.m && pal2?.f) || (pal1?.f && pal2?.m);
}

function getPossibleCombinations(targetId: number, deck: Pal[]) {
  const target = deck.find((p) => p.id === targetId);
  if (!target) return [];

  if (target.specialCombo.length) {
    return hasGenderMatch(target.specialCombo[0], target.specialCombo[1], deck) ? [target.specialCombo] : [];
  }

  const [min, max] = target.range;
  const possibleParents = deck.filter((pal) => pal.breedingPower <= min && (pal.m || pal.f));
  const combinations = [];

  for (const parent1 of possibleParents) {
    const parent2Min = 2 * min - parent1.breedingPower;
    const parent2Max = 2 * max - parent1.breedingPower;

    for (const parent2 of deck) {
      if (
        parent2.breedingPower <= parent2Max &&
        parent2.breedingPower >= parent2Min &&
        hasGenderMatch(parent1.id, parent2.id, deck)
      ) {
        combinations.push([parent1.id, parent2.id]);
      }
    }
  }

  return combinations;
}

type BreedingLine = {
  target: number;
  combinations: number[][];
};

function reduceWithMatches(targets: Pal[], deck: Pal[]) {
  return targets.reduce((acc: BreedingLine[], target) => {
    const combinations = getPossibleCombinations(target.id, deck);
    if (combinations.length) {
      acc.push({ target: target.id, combinations });
    }
    return acc;
  }, []);
}

export function createBreedingLines(deck: Pal[]) {
  // console.time("Calculating...");
  let run = true;
  let currentDeck = JSON.parse(JSON.stringify(deck));

  const lines = [];

  let i = 0;
  while (run && i < 100) {
    i++;
    const missingPals = currentDeck.filter((p: any) => !p.m && !p.f);
    const genderIncompletePals = currentDeck.filter((p: any) => p.m !== p.f);

    const genderComplete = reduceWithMatches(genderIncompletePals, currentDeck);
    const newPals = reduceWithMatches(missingPals, currentDeck);

    run = !!genderComplete.length || !!newPals.length;

    if (run) {
      lines.push({ genderComplete, newPals });

      [...genderComplete, ...newPals].forEach(({ target }) => {
        const t = currentDeck.find((p: Pal) => p.id === target);
        if (t) {
          t.m = true;
          t.f = true;
        }
      });
    }
  }
  // console.timeEnd("Calculating...");
  return lines;
}

function getClosestPal(breedingPower: number) {
  const { match } = palData
    .filter((d) => !d.specialCombo.length)
    .reduce(
      (acc: any, curr) => {
        const diff = Math.abs(curr.breedingPower - breedingPower);
        if (diff < acc.diff || (diff === acc.diff && curr.order < acc.order)) {
          acc.diff = diff;
          acc.match = curr;
          acc.order = curr.order;
        }
        return acc;
      },
      { diff: Infinity, order: Infinity, match: null }
    );

  return match;
}

export function breed(parent1id: number, parent2id: number) {
  // @ts-ignore
  const combo = palData.find((p) => [parent1id, parent2id].every((id) => p.specialCombo.includes(id)));
  if (combo) return combo;

  const p1 = palData.find((p) => p.id === parent1id);
  const p2 = palData.find((p) => p.id === parent2id);

  if (!p1 || !p2) return null;

  const bp1 = p1.breedingPower;
  const bp2 = p2.breedingPower;

  const cbp = Math.floor((bp1 + bp2 + 1) / 2);

  const match = getClosestPal(cbp);

  return match;
}
