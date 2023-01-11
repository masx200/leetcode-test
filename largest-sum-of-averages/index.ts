import { default as memoize } from "https://cdn.skypack.dev/lodash@4.17.21/memoize?dts";

function largestSumOfAverages(nums: number[], k: number): number {
    const n = nums.length;
    const presum = Array<number>(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        presum[i] = presum[i - 1] + nums[i - 1];
    }

    const dfs = memoize(
        (n: number, k: number): number => {
            if (k === 1) {
                return presum[n] / n;
            }
            let ans = 0;

            for (let i = k - 1; i < n; i++) {
                ans = Math.max(
                    ans,
                    dfs(i, k - 1) + (presum[n] - presum[i]) / (n - i)
                );
            }
            return ans;
        },
        (n: number, k: number): string => JSON.stringify([n, k])
    );
    return dfs(n, k);
}
export default largestSumOfAverages;
