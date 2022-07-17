import { writable } from "svelte/store";

const INITIAL_STATE = {
  money: 0,
  notesPlayed: 0,
};

function createPlayerStore() {
  const { subscribe, set, update } = writable(INITIAL_STATE);

  return {
    subscribe,
    set,
    reset: () => set(INITIAL_STATE),
    updateMoney: (val: number) =>
      update((curr) => ({ ...curr, money: curr.money + val })),
    updateNotesPlayed: (val: number) =>
      update((curr) => ({ ...curr, notesPlayed: curr.notesPlayed + val })),
  };
}

export let PlayerStore = createPlayerStore();
