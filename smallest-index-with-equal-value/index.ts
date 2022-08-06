export default function smallestEqual(nums: number[]): number {
    return nums.findIndex((v, i) => i % 10 === v);
}
