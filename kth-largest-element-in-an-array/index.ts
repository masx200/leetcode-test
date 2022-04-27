export default function findKthLargest(nums: number[], k: number): number {
    nums.sort((a, b) => -a + b);
    //  console.log(nums)
    return nums[k - 1];
}
