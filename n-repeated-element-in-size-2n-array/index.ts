export default function repeatedNTimes(nums: number[]): number {
    const n = nums.length;
    while (true) {
        const x = Math.floor(Math.random() * n),
            y = Math.floor(Math.random() * n);
        if (x !== y && nums[x] === nums[y]) {
            return nums[x];
        }
    }
}
