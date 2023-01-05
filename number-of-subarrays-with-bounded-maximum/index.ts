function numSubarrayBoundedMax(
    nums: number[],
    left: number,
    right: number
): number {
    return count(nums, right) - count(nums, left - 1);
}

function count(nums: number[], lower: number) {
    let res = 0,
        cur = 0;
    for (const x of nums) {
        cur = x <= lower ? cur + 1 : 0;
        res += cur;
    }
    return res;
}
export default numSubarrayBoundedMax;
