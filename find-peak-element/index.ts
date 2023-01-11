export default function findPeakElement(nums: number[]): number {
    if (nums.length == 1) {
        return 0;
    }
    if (nums.length == 0) {
        throw Error("empty array:");
    }

    function get(index: number) {
        return nums[index] ?? -Infinity;
    }

    for (let i = 0, j = nums.length - 1; i <= j; ) {
        const m = Math.floor((i + j) / 2);
        // console.log(i, j, m);
        if (nums[m] > get(m + 1) && nums[m] > get(m - 1)) {
            return m;
        }

        if (nums[i] > get(i + 1) && nums[i] > get(i - 1)) {
            return i;
        }
        if (nums[j] > get(j + 1) && nums[j] > get(j - 1)) {
            return j;
        }

        if (nums[m] < get(m + 1)) {
            i = m + 1;
        } else {
            j = m - 1;
        }
    }
    throw Error("accident");
}
