function averageValue(nums: number[]): number {
    return Math.floor(average(nums.filter((v) => v % 6 === 0)));
}
function average(nums: number[]) {
    return nums.length ? nums.reduce((p, v) => p + v, 0) / nums.length : 0;
}
export default averageValue;
