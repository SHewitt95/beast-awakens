import type { Readable } from "svelte/store";
import { readable } from "svelte/store";

// Readable Values
export const INITIAL_RATE_OF_CHANGE: Readable<number> = readable(1 / 12);
export const MAX_COUNT_VALUE: Readable<number> = readable(100);
export const MIN_COUNT_VALUE: Readable<number> = readable(0);
