export default function minimumDeletions(nums: number[]): number {
    const [max, min] = [Math.max(...nums), Math.min(...nums)];
    const [maxPos, minPos] = [nums.indexOf(max), nums.indexOf(min)];
    const len = nums.length;
    const [left, right] = [Math.min(minPos, maxPos), Math.max(maxPos, minPos)];

    return Math.min(right + 1, len - left, 1 + left + len - right);
}
