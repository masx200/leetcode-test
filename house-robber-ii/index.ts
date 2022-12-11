function rob(nums: number[]): number {
    const length = nums.length;
    if (length === 1) {
        return nums[0];
    } else if (length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    return Math.max(
        robRange(nums, 0, length - 2),
        robRange(nums, 1, length - 1)
    );
}

function robRange(nums: number[], start: number, end: number) {
    let first = nums[start],
        second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
        const temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
}
export default rob;
