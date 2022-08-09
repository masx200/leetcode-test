function twoSum(nums: number[], target: number): number[] {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
            return [nums[i], nums[j]];
        }
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        }
    }
    throw Error("should not go here");
}
export default twoSum;
