export default function longestSubarray(nums: number[]): number {
    const max = Math.max(...nums),
        len = nums.length;
    let res = 0,
        maxres = 1;
    for (let i = 0; i <= len; i++) {
        if (nums[i] === max) res++;
        else {
            maxres = Math.max(res, maxres);
            res = 0;
        }
    }
    return maxres;
}
