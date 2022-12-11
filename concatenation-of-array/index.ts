export default function getConcatenation(nums: number[]): number[] {
    return Array(nums.length * 2)
        .fill(0)
        .map((_v, i) => nums[i % nums.length]);
}
