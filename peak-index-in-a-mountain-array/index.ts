export default function peakIndexInMountainArray(arr: number[]): number {
    let left = 0;
    let right = arr.length - 1;

    // 可以看做寻找 arr[i + 1] 小于 arr[i] 区间内的左边界，也就是第一个 arr[i + 1] 小于 arr[i] 的索引
    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        if (arr[mid] === arr[mid + 1]) {
            right = mid - 1;
        } else if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else if (arr[mid] > arr[mid + 1]) {
            right = mid - 1;
        }
    }

    // 题目数据保证 arr 是一个山脉数组，直接返回 left
    return left;
}
