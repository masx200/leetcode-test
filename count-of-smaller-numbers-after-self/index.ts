import { BinaryIndexTree } from "../rank-from-stream-lcci/BinaryIndexTree.ts";

export default function countSmaller(nums: number[]): number[] {
    const bit = new BinaryIndexTree(20001);
    const ans = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        const pos = num + 10001;
        bit.update(pos, 1);
        ans.push(bit.query(pos - 1));
    }
    return ans.reverse();
}
