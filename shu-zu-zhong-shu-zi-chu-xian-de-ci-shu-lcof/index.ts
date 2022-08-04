import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

function singleNumbers(nums: number[]): number[] {
    const cnt = counter(nums);

    return Array.from(cnt)
        .filter((e) => e[1] === 1)
        .map((e) => e[0]);
}
export default singleNumbers;
