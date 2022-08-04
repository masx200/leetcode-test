import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

function singleNumber(nums: number[]): number {
    const cnt = counter(nums);

    for (const [key, value] of cnt.entries()) {
        if (value === 1) return key;
    }
    return nums[0];
}
export default singleNumber;
