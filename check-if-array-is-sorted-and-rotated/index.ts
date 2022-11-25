function check(nums: number[]): boolean {
    return nums
        .concat(nums)
        .join()
        .includes(nums.sort((a, b) => a - b).join());
}
export default check;
