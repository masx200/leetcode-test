import { counter } from "./counter.ts";

export default function findSubstring(s: string, words: string[]): number[] {
    const cnts = counter(words);
    const step = words[0].length;

    return Array(s.length - step * words.length + 1)
        .fill(0)
        .map((_, i) => i)
        .filter(
            (i) => {
                const curcnts = new Map<string, number>();
                const values = Array(words.length)
                    .fill(0)
                    .map((_, i) => i)
                    .map((j) => s.slice(i + j * step, i + (j + 1) * step));

                for (const word of values) {
                    if (!cnts.has(word)) {
                        return false;
                    }
                    curcnts.set(word, (curcnts.get(word) ?? 0) + 1);

                    const count1 = curcnts.get(word);
                    const count2 = cnts.get(word);
                    if (
                        typeof count2 === "number" &&
                        count1 &&
                        count1 > count2
                    ) {
                        return false;
                    }
                }
                return true;
            }
            // equal(
            //     cnts,
            //     counter(
            //         Array(words.length)
            //             .fill(0)
            //             .map((_, i) => i)
            //             .map((j) => s.slice(i + j * step, i + (j + 1) * step)),
            //     ),
            // )
        );
}
