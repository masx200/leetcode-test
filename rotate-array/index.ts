export default function rotate(nums: number[], k: number): void {
    [...nums, ...nums]
        .slice(
            nums.length - (k % nums.length),
            2 * nums.length - (k % nums.length)
        )
        .forEach((v, i) => (nums[i] = v));
}
