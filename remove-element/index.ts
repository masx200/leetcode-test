export default function removeElement(nums: number[], val: number): number {
    let idx = 0;
    for (const x of nums) {
        if (x != val) {
            // console.log(x)
            // console.log(idx)
            nums[idx++] = x;

            // console.log(nums)
        }
    }
    return idx;
}
