export default function sumSubarrayMins(arr: number[]): number {
    const n = arr.length;
    let ans = 0;
    const MOD = 1000000007;
    const monoStack: number[] = [];
    const dp: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        while (
            monoStack.length !== 0 &&
            arr[monoStack[monoStack.length - 1]] > arr[i]
        ) {
            monoStack.pop();
        }
        const k = monoStack.length === 0
            ? (i + 1)
            : (i - monoStack[monoStack.length - 1]);
        dp[i] = k * arr[i] + (monoStack.length === 0 ? 0 : dp[i - k]);
        ans = (ans + dp[i]) % MOD;
        monoStack.push(i);
    }
    return ans;
}
