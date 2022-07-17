import { writable } from "svelte/store";

// type PiperPal = {};

const INITIAL_STATE = {
  amountOfPals: 0,
  newPalCost: 2,
  beastRegression: 2,
};

function createPiperPalStore() {
  const base = 1.5;
  const { subscribe, set, update } = writable(INITIAL_STATE);

  return {
    subscribe,
    set,
    reset: () => set(INITIAL_STATE),
    addPiperPal: () =>
      update((curr) => ({
        ...curr,
        amountOfPals: curr.amountOfPals + 1,
        newPalCost: Math.pow(INITIAL_STATE.newPalCost, curr.amountOfPals + 1),
      })),
  };
}

export let PiperPalStore = createPiperPalStore();
