import { writable } from "svelte/store";

const INITIAL_STATE = {
  gameStart: false,
  gameOver: false,
};

function createGameStore() {
  const { subscribe, set, update } = writable(INITIAL_STATE);

  return {
    subscribe,
    set,
    reset: () => set(INITIAL_STATE),
    startGame: () => update((curr) => ({ ...curr, gameStart: true })),
    endGame: () => update((curr) => ({ ...curr, gameOver: true })),
  };
}

export let GameStore = createGameStore();
