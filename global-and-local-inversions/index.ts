function isIdealPermutation(nums: number[]): boolean {
    return nums.every((v, i) => Math.abs(v - i) <= 1);
}
export default isIdealPermutation;
