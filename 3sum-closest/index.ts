export default function threeSumClosest(
    nums: number[],
    target: number
): number {
    let N = nums.length;
    let res = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < N; i++) {
        let left = i + 1;
        let right = N - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return res;
}
