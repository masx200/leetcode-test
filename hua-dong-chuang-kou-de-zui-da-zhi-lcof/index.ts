export default function maxSlidingWindow(nums: number[], k: number): number[] {
    if (k === 0 || nums.length === 0) return [];

    const n = nums.length;
    const prefixMax: number[] = new Array(n).fill(0);
    const suffixMax: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (i % k === 0) {
            prefixMax[i] = nums[i];
        } else {
            prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
        }
    }
    for (let i = n - 1; i >= 0; --i) {
        if (i === n || (i + 1) % k === 0) {
            suffixMax[i] = nums[i];
        } else {
            suffixMax[i] = Math.max(suffixMax[i + 1], nums[i]);
        }
    }
    const ans: number[] = [];
    for (let i = 0; i < n - k + 1; i++) {
        ans.push(Math.max(suffixMax[i], prefixMax[i + k - 1]));
    }
    return ans;
}
