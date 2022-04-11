export default function moveZeroes(nums: number[]): void {
    if (nums.length === 0) {
        return;
    }
    const notzeros = nums.filter((a) => a !== 0);
    nums.splice(0, notzeros.length, ...notzeros);
    for (let i = notzeros.length; i < nums.length; i++) {
        nums[i] = 0;
    }
}
