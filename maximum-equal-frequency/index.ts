export default function maxEqualFreq(nums: number[]) {
    const freq = new Map<number, number>();
    const count = new Map<number, number>();
    let res = 0,
        maxFreq = 0;
    for (let i = 0; i < nums.length; i++) {
        const count_old = count.get(nums[i]) ?? 0;
        if (count_old > 0) {
            freq.set(count_old, (freq.get(count_old) ?? 0) - 1);
        }
        count.set(nums[i], count_old + 1);
        const curCount = count.get(nums[i]) ?? 0;
        maxFreq = Math.max(maxFreq, curCount);

        freq.set(curCount, (freq.get(count.get(nums[i]) ?? 0) ?? 0) + 1);
        const maxFreqCount = freq.get(maxFreq) ?? 0;
        const ok = maxFreq === 1 ||
            (maxFreqCount * maxFreq +
                            (freq.get(maxFreq - 1) ?? 0) * (maxFreq - 1) ===
                    i + 1 &&
                maxFreqCount === 1) ||
            (maxFreqCount * maxFreq + 1 === i + 1 && freq.get(1) === 1);
        if (ok) {
            res = Math.max(res, i + 1);
        }
    }
    return res;
}
