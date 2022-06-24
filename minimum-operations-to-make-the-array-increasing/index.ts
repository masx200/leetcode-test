export default function minOperations(nums: number[]): number {
    if (nums.length < 1) {
        return 0;
    }
    let ans = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            ans += nums[i - 1] - nums[i] + 1;
            nums[i] = nums[i - 1] + 1;
        }
    }
    return ans;
}
