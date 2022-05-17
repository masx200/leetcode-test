export default function sortedSquares(nums: number[]): number[] {
    return nums.map((a) => Math.pow(a, 2)).sort((a, b) => a - b);
}
