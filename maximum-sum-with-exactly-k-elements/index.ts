function maximizeSum(nums: number[], k: number): number {
    const m = Math.max(...nums);
    return k * (m + m + k - 1) / 2;
}
export default maximizeSum;
