export default function arraySign(nums: number[]): number {
    let ans = 1;
    for (const num of nums) {
        if (num === 0) return 0;
        ans *= Math.sign(num);
    }
    return ans;
}
