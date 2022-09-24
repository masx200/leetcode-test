export default function maximumUniqueSubarray(nums: number[]): number {
    let sum = 0;
    let res = -Infinity;
    let j = 0;
    const set = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        // 窗口不满足条件，即有重复元素时
        while (set.has(nums[i])) {
            set.delete(nums[j]); // 删掉该元素
            sum -= nums[j]; // 更新需要维护的变量
            j++;
        }
        set.add(nums[i]); // 最后加入该元素
        res = Math.max(res, sum); // 此时都是符合题意要求的，可以直接更新res值
    }
    return res;
}
