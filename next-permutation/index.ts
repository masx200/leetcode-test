export default function nextPermutation(nums: number[]): void {
    if (nums.length === 0) return;
    let firstIndex = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            firstIndex = i - 1;
            break;
        }
    }
    if (firstIndex === -1) {
        nums.reverse();
        return;
    }
    let secondIndex = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[firstIndex]) {
            secondIndex = i;
            break;
        }
    }
    [nums[firstIndex], nums[secondIndex]] = [
        nums[secondIndex],
        nums[firstIndex],
    ];
    reverse(nums, firstIndex + 1, nums.length - 1);
}

function reverse(nums: number[], arg1: number, arg2: number) {
    while (arg1 < arg2) {
        [nums[arg1], nums[arg2]] = [nums[arg2], nums[arg1]];
        arg1++;
        arg2--;
    }
}
