import { writable } from "svelte/store";
import {
  MAX_COUNT_VALUE,
  MIN_COUNT_VALUE,
  INITIAL_RATE_OF_CHANGE,
} from "./Constants";

const INITIAL_STATE = {
  awakenProgress: 0,
};

function createBeastStore() {
  const { subscribe, set, update } = writable(INITIAL_STATE);

  return {
    subscribe,
    set,
    reset: () => set(INITIAL_STATE),
    regressAwaken: (val: number) =>
      update((curr) => ({
        ...curr,
        awakenProgress: curr.awakenProgress - val,
      })),
    progressAwaken: (val: number) =>
      update((curr) => ({
        ...curr,
        awakenProgress: curr.awakenProgress + val,
      })),
    stirTheBeast: () =>
      update((curr) => ({
        ...curr,
        awakenProgress: Math.max(
          Math.min(
            (curr.awakenProgress += INITIAL_RATE_OF_CHANGE),
            MAX_COUNT_VALUE
          ),
          MIN_COUNT_VALUE
        ),
      })),
  };
}

export let BeastStore = createBeastStore();
