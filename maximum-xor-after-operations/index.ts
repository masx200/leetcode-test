export default function maximumXOR(nums: number[]): number {
    return nums.reduce((pre, cur) => pre | cur, 0);
}
