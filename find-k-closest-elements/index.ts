export default function findClosestElements(
    arr: number[],
    k: number,
    x: number,
): number[] {
    const size = arr.length;
    let left = 0;
    let right = size - k;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        //  # 尝试从长度为 k + 1 的连续子区间删除一个元素
        // # 从而定位左区间端点的边界值

        //x大于左右端点的平均值
        if (2 * x > arr[mid] + arr[mid + k]) {
            //右移
            left = mid + 1;
        } else {
            //左移
            right = mid;
        }
    }

    return arr.slice(left, left + k);
}
