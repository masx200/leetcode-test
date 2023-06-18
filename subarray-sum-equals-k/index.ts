function subarraySum(nums: number[], k: number) {
    const mp = new Map<number, number>();
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            count += mp.get(pre - k) ?? 0;
        }
        if (mp.has(pre)) {
            mp.set(pre, (mp.get(pre) ?? 0) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
}
export default subarraySum;
