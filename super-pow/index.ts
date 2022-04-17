import { superPow_mod } from "./superPow_mod.ts";

export default function superPow(a: number, b: number[]): number {
    return superPow1337(a, b);
}

const superPow1337: typeof superPow = (a, b) => superPow_mod(a, b, 1337);
