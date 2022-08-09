import { superPow_mod } from "./superPow_mod.ts";

export default function superPow(a: number, b: number[]): number {
    return superPow1337(a, b);
}

function superPow1337(a: number, b: number[]) {
    return superPow_mod(a, b, 1337);
}
