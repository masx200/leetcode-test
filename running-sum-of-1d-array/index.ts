export default function runningSum(nums: number[]): number[] {
    let last = 0;
    return nums.map((v, i) => {
        last = i === 0 ? v : v + last;
        return last;
    });
}
