export default function jump(nums: number[]): number {
    const length = nums.length;
    let end = 0;
    let maxPosition = 0;
    let steps = 0;
    for (let i = 0; i < length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (i == end) {
            end = maxPosition;
            steps++;
        }
    }
    return steps;
}
