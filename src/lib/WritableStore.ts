import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

// Writable Values
export let count: Writable<number> = writable(0);
export let clickCount: Writable<number> = writable(0);
export let money: Writable<number> = writable(1000);
export let gameStart: Writable<boolean> = writable(false);
export let gameOver: Writable<boolean> = writable(false);
