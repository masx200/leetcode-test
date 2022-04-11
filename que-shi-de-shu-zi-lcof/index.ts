export default function missingNumber(nums: number[]): number {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i != nums[i]) {
            return i;
        }
    }
    return len;
}
