function wiggleMaxLength(nums: number[]): number {

    const n = nums.length;
    if (n < 2) {
        return n;
    }
    let prevdiff = nums[1] - nums[0];
    let ret = prevdiff !== 0 ? 2 : 1;
    for (let i = 2; i < n; i++) {
        const diff = nums[i] - nums[i - 1];
        if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
            ret++;
            prevdiff = diff;
        }
    }
    return ret;
}
export default wiggleMaxLength
