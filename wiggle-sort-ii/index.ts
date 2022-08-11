function wiggleSort(nums: number[]): void {
    const bucket = Array<number>();

    for (const num of nums) {
        bucket[num] = (bucket[num] ?? 0) + 1;
    }
    let j = bucket.length - 1;

    for (let i = 1; i < nums.length; i += 2) {
        while ((bucket[j] ?? 0) === 0) {
            j--;
        }

        nums[i] = j;
        bucket[j]--;
    }
    for (let i = 0; i < nums.length; i += 2) {
        while ((bucket[j] ?? 0) === 0) {
            j--;
        }

        nums[i] = j;
        bucket[j]--;
    }
}
export default wiggleSort;
