export default function buildArray(nums: number[]): number[] {
    return nums.map((num: number, _i, a) => a[num]);
}
