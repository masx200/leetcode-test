export default function containsNearbyAlmostDuplicate(
    nums: number[],
    k: number,
    t: number,
): boolean {
    //要查找值<=t则桶的大小为t+1,这样一个桶内的最小值是x,最大值是x+t,桶的大小是t+1
    const bucket = t + 1;
    //用map来存储桶排序的结果
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        //根据当前值获取桶号
        const index = Math.floor(nums[i] / bucket);
        const right = map.get(index + 1);
        const left = map.get(index - 1);
        //如果有两个元素放在一个桶里，已知一个桶里的元素最大值和最小值符合<=t，则返回true
        if (map.get(index) !== undefined) {
            return true; //注意map.get(index)存的值可能是数字0
        } //元素和相邻桶比较是否满足要求
        else if (right !== undefined && Math.abs(right - nums[i]) <= t) {
            return true;
        } else if (left !== undefined && Math.abs(left - nums[i]) <= t) {
            return true;
        }
        //走到这里，说明没有满足要求的，先把当前的元素放到桶里，等待下一次比较
        map.set(index, nums[i]);
        //由于需要比较下标差值<=k，因此需要删除i-k及之前的无效下标范围的元素
        if (i >= k) {
            map.delete(Math.floor(nums[i - k] / bucket));
        }
    }
    return false;
}
