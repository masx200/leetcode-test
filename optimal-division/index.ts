export default function optimalDivision(nums: number[]): string {
    if (nums.length == 1) return nums[0] + "";
    if (nums.length == 2) return nums[0] + "/" + nums[1];

    let res = nums[0] + "/(" + nums[1];
    for (let i = 2; i < nums.length; i++) {
        res += "/" + nums[i];
    }
    return res + ")";
}
