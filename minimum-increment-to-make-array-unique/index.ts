export default function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let count = 0;
    for (let i = 1, before = nums[0]; i < nums.length; i++) {
        if (before < nums[i]) {
            before = nums[i];
        } else {
            before = before + 1;
            count += before - nums[i];
        }
    }

    return count;
}
