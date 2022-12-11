export default function minimalKSum(nums: number[], k: number): number {
    nums = [...new Set(nums)].sort((a, b) => a - b);
    const n: number = nums.length;
    let exist: number = 0;
    for (let i: number = 0; i < n; i++) {
        if (nums[i] <= k) {
            k++;
            exist += nums[i];
        } else {
            break;
        }
    }

    return (k * (k + 1)) / 2 - exist;
}
