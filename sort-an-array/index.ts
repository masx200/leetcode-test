export default function sortArray(nums: number[]): number[] {
    0 < nums.length - 1 && mergeSort(nums, 0, nums.length - 1);

    return nums;
}

function mergeSort(nums: number[], left: number, right: number) {
    if (left < right) {
        const middle = Math.floor((left + right) / 2);

        left < middle && mergeSort(nums, left, middle);

        middle + 1 < right && mergeSort(nums, middle + 1, right);

        mergeArray(nums, left, middle, middle + 1, right);
    }
}

function mergeArray(
    nums: number[],
    left1: number,
    right1: number,
    left2: number,
    right2: number
) {
    const temp: number[] = Array(right2 - left2 + right1 - left1 + 2);

    let p1 = left1;

    let p2 = left2;

    let t1 = 0;

    while (p1 <= right1 && p2 <= right2) {
        if (nums[p1] <= nums[p2]) {
            temp[t1] = nums[p1];

            t1++;

            p1++;
        } else {
            temp[t1] = nums[p2];

            t1++;

            p2++;
        }
    }
    while (p1 <= right1) {
        temp[t1] = nums[p1];

        t1++;

        p1++;
    }

    while (p2 <= right2) {
        temp[t1] = nums[p2];

        t1++;

        p2++;
    }

    let t2 = 0;

    let p3 = left1;

    while (p3 <= right2) {
        nums[p3] = temp[t2];

        p3++;

        t2++;
    }
}
