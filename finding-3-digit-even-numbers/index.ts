import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

function findEvenNumbers(digits: number[]): number[] {
    if (digits.every((n) => n & 1)) return [];
    const cnt = counter(digits);
    return Array((1000 - 100) / 2)
        .fill(0)
        .map((_, i) => 100 + i * 2)
        .filter((n) =>
            [...counter(n.toString())].every(
                ([key, value]) => (cnt.get(Number(key)) ?? 0) >= value
            )
        );
}
export default findEvenNumbers;
