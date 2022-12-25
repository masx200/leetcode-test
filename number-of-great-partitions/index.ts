function countPartitions(nums: number[], k: number): number {
    const MOD = 1e9 + 7;
    let sum = 0;
    for (const x of nums) sum += x;
    if (sum < k * 2) return 0;
    let ans = 1;
    const f = new Array<number>(k).fill(0);
    f[0] = 1;
    for (const x of nums) {
        ans = (ans * 2) % MOD;
        for (let j = k - 1; j >= x; --j) {
            f[j] = (f[j] + f[j - x]) % MOD;
        }
    }
    for (const x of f) {
        ans = (ans - ((x * 2) % MOD) + MOD) % MOD; // 保证答案非负
    }
    return ans;
}
export default countPartitions;
