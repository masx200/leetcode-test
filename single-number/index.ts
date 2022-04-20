export default function singleNumber(nums: number[]): number {
    return nums.reduce((x, y) => x ^ y, 0);
}
