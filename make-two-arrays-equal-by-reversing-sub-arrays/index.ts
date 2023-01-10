import { counter } from "../mod.ts";

export default function canBeEqual(target: number[], arr: number[]): boolean {
    return MapisEqual(counter(target), counter(arr));
}

function MapisEqual(a: Map<number, number>, b: Map<number, number>) {
    return (
        a === b ||
        (a.size === b.size &&
            Array.from(a.keys()).every(
                (k) => b.has(k) && a.get(k) === b.get(k),
            ))
    );
}
