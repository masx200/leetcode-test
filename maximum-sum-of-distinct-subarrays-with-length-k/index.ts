export default function maximumSubarraySum(nums: number[], k: number): number {
    const set = new Set<number>();
    let right = 0, left = 0, ans = 0, res = 0;
    while (right != nums.length) {
        // 如果set存过  set就从left开始删  直到没存过nums[right]
        while (set.has(nums[right])) {
            set.delete(nums[left]);
            res -= nums[left++];
        }
        // set存当前的nums[right]
        set.add(nums[right]);
        res += nums[right++];
        // 如果有k个了 取大值  删除left的
        if (right - left == k) {
            ans = Math.max(ans, res);
            set.delete(nums[left]);
            res -= nums[left++];
        }
    }
    return ans;
}
