import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

export default mostFrequentEven;
function mostFrequentEven(nums: number[]): number {
    const evens = nums.filter((a) => !(a % 2));
    if (evens.length === 0) return -1;
    const cnt = counter(evens);

    const freq = Math.max(...cnt.values());
    return Math.min(
        ...[...cnt.entries()].filter(([_k, v]) => v === freq).map((a) => a[0]),
    );
}
