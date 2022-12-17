function minElements(nums: number[], limit: number, goal: number): number {
    return Math.ceil(Math.abs(goal - nums.reduce((a, b) => a + b)) / limit);
}
export default minElements;
