function splitArraySameAverage(nums: number[]): boolean {
    if (nums.length === 1) {
        return false;
    }
    const n = nums.length,
        m = Math.floor(n / 2);
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] * n - sum;
    }

    const left: Set<number> = new Set();
    for (let i = 1; i < 1 << m; i++) {
        let tot = 0;
        for (let j = 0; j < m; j++) {
            if ((i & (1 << j)) !== 0) {
                tot += nums[j];
            }
        }
        if (tot === 0) {
            return true;
        }
        left.add(tot);
    }
    let rsum = 0;
    for (let i = m; i < n; i++) {
        rsum += nums[i];
    }
    for (let i = 1; i < 1 << (n - m); i++) {
        let tot = 0;
        for (let j = m; j < n; j++) {
            if ((i & (1 << (j - m))) != 0) {
                tot += nums[j];
            }
        }
        if (tot === 0 || (rsum !== tot && left.has(-tot))) {
            return true;
        }
    }
    return false;
}
export default splitArraySameAverage;
