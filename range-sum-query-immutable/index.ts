export default class NumArray {
    #presum: number[];
    constructor(nums: number[]) {
        const presum: number[] = Array(nums.length + 1).fill(0);
        nums.forEach((value, index) => {
            presum[index + 1] = value + (presum[index]);
        });
        this.#presum = presum;
    }

    sumRange(left: number, right: number): number {
        return (this.#presum[right + 1]) - this.#presum[left];
    }
}
