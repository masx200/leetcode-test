import { equal } from "../deps.ts";
import { counter } from "./counter.ts";

export default function findSubstring(s: string, words: string[]): number[] {
    const cnts = counter(words);
    const step = words[0].length;

    return Array(s.length - step * words.length + 1)
        .fill(0)
        .map((_, i) => i)
        .filter((i) =>
            equal(
                cnts,
                counter(
                    Array(words.length)
                        .fill(0)
                        .map((_, i) => i)
                        .map((j) => s.slice(i + j * step, i + (j + 1) * step)),
                ),
            )
        );
}
