function isStraight(nums: number[]): boolean {
    let joker = 0;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < 4; i++) {
        if (nums[i] == 0) joker++; // 统计大小王数量
        else if (nums[i] == nums[i + 1]) return false; // 若有重复，提前返回 false
    }
    return nums[4] - nums[joker] < 5;
}
export default isStraight;
