export default function arithmeticTriplets(
    nums: number[],
    diff: number
): number {
    const set = new Set(nums);
    return nums.reduce(
        (a, v) => a + Number(set.has(v - diff) && set.has(v - 2 * diff)),
        0
    );
}
