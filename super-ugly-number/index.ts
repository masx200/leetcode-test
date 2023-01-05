export default function nthSuperUglyNumber(
    n: number,
    primes: number[]
): number {
    const dp: number[] = new Array(n + 1).fill(0);
    const m = primes.length;
    const pointers: number[] = new Array(m).fill(0);
    const nums: number[] = new Array(m).fill(1);
    for (let i = 1; i <= n; i++) {
        let minNum = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < m; j++) {
            minNum = Math.min(minNum, nums[j]);
        }
        dp[i] = minNum;
        for (let j = 0; j < m; j++) {
            if (nums[j] == minNum) {
                pointers[j]++;
                nums[j] = dp[pointers[j]] * primes[j];
            }
        }
    }
    return dp[n];
}
