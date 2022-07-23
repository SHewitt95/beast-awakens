import { writable } from "svelte/store";

type PiperPal = {
  id: number;
  notesPerTick: number;
  payPerNote: number;
  happiness: number;
};

interface State {
  amountOfPals: number;
  newPalCost: number;
  beastRegression: number;
  pals: PiperPal[];
}

const INITIAL_STATE: State = {
  amountOfPals: 0,
  newPalCost: 2,
  beastRegression: 2,
  pals: [],
};

function createPiperPalStore() {
  const { subscribe, set, update } = writable(INITIAL_STATE);

  function createPal({ id }): PiperPal {
    return {
      id,
      notesPerTick: 1,
      payPerNote: 1,
      happiness: 1,
    };
  }

  return {
    subscribe,
    set,
    reset: () => set(INITIAL_STATE),
    addPiperPal: () =>
      update((curr) => ({
        ...curr,
        amountOfPals: curr.amountOfPals + 1,
        newPalCost: Math.pow(INITIAL_STATE.newPalCost, curr.amountOfPals + 1),
        pals: [...curr.pals, createPal({ id: curr.amountOfPals })],
      })),
  };
}

export let PiperPalStore = createPiperPalStore();
