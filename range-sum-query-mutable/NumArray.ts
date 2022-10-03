export default class NumArray {
    #tree: number[];
    #nums: number[];
    constructor(nums: number[]) {
        this.#tree = new Array(nums.length + 1).fill(0);
        this.#nums = nums;
        for (let i = 0; i < nums.length; i++) {
            this.#add(i + 1, nums[i]);
        }
    }
    #add(index: number, val: number) {
        while (index < this.#tree.length) {
            this.#tree[index] += val;
            index += this.#lowBit(index);
        }
    }
    #lowBit(x: number) {
        return x & -x;
    }
    update(index: number, val: number): void {
        this.#add(index + 1, val - this.#nums[index]);
        this.#nums[index] = val;
    }

    sumRange(left: number, right: number): number {
        return this.#prefixSum(right + 1) - this.#prefixSum(left);
    }
    #prefixSum(index: number) {
        let sum = 0;
        while (index > 0) {
            sum += this.#tree[index];
            index -= this.#lowBit(index);
        }
        return sum;
    }
}
