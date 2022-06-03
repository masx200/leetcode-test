export default function minimumSum(num: number): number {
    const nums = String(num).split("").map((s) => Number(s));

    nums.sort();

    return 10 * (nums[0] + nums[1]) + nums[2] + nums[3];
}
