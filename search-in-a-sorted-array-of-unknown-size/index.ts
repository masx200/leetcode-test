import { ArrayReader } from "./ArrayReader.ts";

export default search;
function search(reader: ArrayReader, target: number): number {
    let left = 1;
    let right = 1;
    while (reader.get(right) < target) right *= 2;

    left = Math.floor(right / 2);

    while (left <= right) {
        const m = Math.floor((left + right) / 2);

        const v = reader.get(m);

        if (v === target) return m;
        if (v > target) right = m - 1;
        else left = m + 1;
    }
    return -1;
}
