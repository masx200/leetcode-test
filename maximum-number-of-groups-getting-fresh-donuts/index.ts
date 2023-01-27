function maxHappyGroups(batchSize: number, groups: number[]): number {
    const cnt: number[] = groups.reduce(function (cnt, g) {
        ++cnt[g % batchSize];
        return cnt;
    }, new Array<number>(batchSize).fill(0));
    const memo = new Map<number, number>();

    // 不计算 0，因为 0 的位置对结果没有影响
    const mask = useMask([0, ...cnt.slice(1)], 31);

    function dfs(mask: ReturnType<typeof useMask>): number {
        const key = mask.value();
        if (key === 0) return 0;
        if (memo.has(key)) return memo.get(key) ?? 0;
        const sum = mask.toArray().reduce((acc, v, idx) => acc + v * idx, 0);
        let res = 0;
        // 枚举 i 为当前 cnt 序列的最后一个数
        for (let i = 1; i < batchSize; i++) {
            const amount = mask.get(i);
            if (amount === 0) continue;

            mask.set(i, amount - 1);
            let count = dfs(mask);
            mask.set(i, amount);

            // 如果不算 i 的情况下，前面的数能够整除 batchSize，说明 i 是受益的
            if ((sum - i) % batchSize === 0) {
                count++;
            }
            res = Math.max(res, count);
        }
        memo.set(key, res);
        return res;
    }

    // 把 0 放在最前面，容易计算出获益的 cnt[0]
    return dfs(mask) + cnt[0];
}
function useMask(
    numArray: number[],
    m: number,
): {
    get: (index: number) => number;
    set: (index: number, val: number) => boolean;
    value: () => number;
    toArray: () => number[];
} {
    const nums = [...numArray];
    const n = nums.length;
    const pow = new Array(n + 1).fill(0).map((_, idx) => Math.pow(m, idx));

    let data = 0;
    for (let i = n - 1; i >= 0; i--) {
        data = data * m + nums[i];
    }

    function get(index: number) {
        return nums[index];
    }

    function set(index: number, val: number) {
        if (index < 0 || index >= n || val >= m) return false;

        const l = Math.trunc(data / pow[index + 1]);
        const r = data % pow[index];
        data = (l * m + val) * pow[index] + r;

        nums[index] = val;
        return true;
    }

    function toArray() {
        return [...nums];
    }

    function value() {
        return data;
    }

    return { get, set, value, toArray };
}
export default maxHappyGroups;
