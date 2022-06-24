export default function maxAscendingSum(nums: number[]): number {
    let ans = 0;

    let last = 0;
    let sum = 0;
    for (const num of nums) {
        if (num > last) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum);
        last = num;
    }
    return ans;
}
