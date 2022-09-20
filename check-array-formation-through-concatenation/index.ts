import { isEqual } from "../deps.ts";

function canFormArray(arr: number[], pieces: number[][]): boolean {
    const map = new Map<number, number>();

    for (const [i, n] of arr.entries()) {
        map.set(n, i);
    }

    pieces.sort((a, b) => (map.get(a[0]) ?? 0) - (map.get(b[0]) ?? 0));

    return isEqual(arr, pieces.flat());
}
export default canFormArray;
