function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;

    // L 和 R 分别表示左右两侧的乘积列表
    const L = new Array<number>(length);
    const R = new Array<number>(length);

    const answer = new Array<number>(length);

    // L[i] 为索引 i 左侧所有元素的乘积
    // 对于索引为 '0' 的元素，因为左侧没有元素，所以 L[0] = 1
    L[0] = 1;
    for (let i = 1; i < length; i++) {
        L[i] = nums[i - 1] * L[i - 1];
    }

    // R[i] 为索引 i 右侧所有元素的乘积
    // 对于索引为 'length-1' 的元素，因为右侧没有元素，所以 R[length-1] = 1
    R[length - 1] = 1;
    for (let i = length - 2; i >= 0; i--) {
        R[i] = nums[i + 1] * R[i + 1];
    }

    // 对于索引 i，除 nums[i] 之外其余各元素的乘积就是左侧所有元素的乘积乘以右侧所有元素的乘积
    for (let i = 0; i < length; i++) {
        answer[i] = L[i] * R[i];
    }

    return answer;
}
export default productExceptSelf;
