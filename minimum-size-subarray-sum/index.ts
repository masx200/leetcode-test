export default function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let ans = Infinity;
    let start = 0;
    let sum = 0;
    for (let end = 0; end < n; end++) {
        sum += nums[end];
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }
    return ans === Infinity ? 0 : ans;
}
