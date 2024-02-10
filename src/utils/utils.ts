// @ts-nocheck
import type { Pal } from "@/composables/usePalDeck";
import { palData } from "@/data/data";

function hasGenderMatch(palId1: number, palId2: number, deck: Pal[]) {
  const pal1 = deck.find((p) => p.id === palId1);
  const pal2 = deck.find((p) => p.id === palId2);
  return (pal1?.m && pal2?.f) || (pal1?.f && pal2?.m);
}

export function getPossibleCombinations(targetId: number, deck: Pal[], skipGenderCheck = false) {
  const target = deck.find((p) => p.id === targetId);
  if (!target) return [];

  if (target.specialCombo.length) {
    return skipGenderCheck || hasGenderMatch(target.specialCombo[0], target.specialCombo[1], deck)
      ? [target.specialCombo, [targetId, targetId]]
      : [];
  }

  const [min, max] = target.range;
  const possibleParents = deck.filter((pal) => pal.breedingPower <= max && (pal.m || pal.f));
  const combinations = [];

  for (const parent1 of possibleParents) {
    const parent2Min = 2 * min - parent1.breedingPower;
    const parent2Max = 2 * max - parent1.breedingPower;

    for (const parent2 of deck) {
      if (combinations.some((comb) => [parent1.id, parent2.id].every((p) => comb.includes(p)))) continue;

      if (
        parent2.breedingPower <= parent2Max &&
        parent2.breedingPower >= parent2Min &&
        (skipGenderCheck || hasGenderMatch(parent1.id, parent2.id, deck))
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
  const combo = palData.find((p) => {
    const [c1, c2] = p.specialCombo;
    return (parent1id === c1 && parent2id === c2) || (parent1id === c2 && parent2id === c1);
  });
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

function getPossibleOffsprings(pal: number, deck: Pal[]) {
  const offsprings = [];
  for (const p of deck) {
    offsprings.push([p.id, breed(pal, p.id).id]);
  }
  return offsprings;
}

export function findPath(from: number, to: number, deck) {
  // const deck = palData.map((p) => ({ ...p, m: true, f: true }));

  function printLine({ p1, p2, child, children }, indent = 0) {
    const pa1 = palData.find((p) => p.id === p1);
    const pa2 = palData.find((p) => p.id === p2);
    console.log(
      `${"\t".repeat(indent)}Breed #${pa1.id} ${pa1.name} (${pa1.breedingPower}) with #${pa2.id} ${pa2.name} (${
        pa2.breedingPower
      })`
    );
    if (child !== undefined) {
      const c = palData.find((p) => p.id === child);
      const actual = breed(p1, p2);
      const ok = actual.id === to;

      if (!ok) {
        console.log(`\n\n\n WRONG!!!!!  ${actual.id} - ${to} \n\n\n`);
      }

      console.log(`${"\t".repeat(indent)}>>> Get #${c.id} ${c.name} (${c.breedingPower}) <<<`);
    } else {
      console.log(`${"\t".repeat(indent)}Get Children:`);
      for (const c of children) {
        printLine(c, indent + 1);
      }
    }
  }

  function getTree(parent: number, completed: number[] = []): any {
    const children = getPossibleOffsprings(parent, deck);

    const nodes = [];

    const c = [...new Set([...completed, ...children.map(([_, i]) => i)])];
    for (const [p2, child] of children) {
      if (child === to) {
        nodes.push({ p1: parent, p2, child });
        continue;
      }

      if (completed.includes(child)) continue;

      completed.push(child);

      const nextGen = getTree(child, c);
      if (nextGen.length) {
        nodes.push({ p1: parent, p2, children: nextGen });
      }
    }
    return nodes;
  }

  const rows = getTree(from, []);

  const allPaths: any = [];
  let minLength = Infinity;
  function getPath(node: any, history: any = []): any {
    if (node.hasOwnProperty("child")) {
      const res = [...history, [node.child]];
      minLength = Math.min(minLength, res.length);
      allPaths.push(res);
      return;
    }
    for (const childNode of node.children) {
      getPath(childNode, [...history, [childNode.p1, childNode.p2]]);
    }
  }

  rows.forEach((p) => getPath(p, [[p.p1, p.p2]]));

  return allPaths.filter((p) => p.length <= minLength);
}
