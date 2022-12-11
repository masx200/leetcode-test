export default function countSubarrays(
    nums: number[],
    minK: number,
    maxK: number
): number {
    let ans = 0;
    const n = nums.length;
    let minI = -1,
        maxI = -1,
        i0 = -1;

    for (let i = 0; i < n; ++i) {
        const x = nums[i];
        if (x == minK) minI = i;
        if (x == maxK) maxI = i;
        if (x < minK || x > maxK) i0 = i; // 子数组不能包含 nums[i0]
        ans += Math.max(Math.min(minI, maxI) - i0, 0);
    }
    return ans;
}
