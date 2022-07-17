import { writable } from "svelte/store";

// type PiperPal = {};

const INITIAL_STATE = {
  amountOfPals: 0,
};

function createPiperPalStore() {
  const { subscribe, set, update } = writable(INITIAL_STATE);

  return {
    subscribe,
    set,
    reset: () => set(INITIAL_STATE),
    addPiperPal: () =>
      update((curr) => ({ ...curr, amountOfPals: curr.amountOfPals + 1 })),
  };
}

export let PiperPalStore = createPiperPalStore();
