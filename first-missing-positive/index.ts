function firstMissingPositive(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let re = 1;
    for (const v of nums) {
        if (v === re) re++;
    }
    return re;
}
export default firstMissingPositive;
