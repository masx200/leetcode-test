import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import levelOrder from "../binary-tree-level-order-traversal/index.ts";

export default function minimumOperations(root: TreeNode | null): number {
    const levels = levelOrder(root);
    const operations = levels.map(minSwaps);
    return operations.reduce((p, c) => p + c, 0);
}
function minSwaps(nums: number[]): number {
    const nums1 = [...nums];
    nums1.sort((a, b) => a - b);

    const map = new Map(nums1.map((v, i) => [v, i]));

    const len = nums.length;
    let loops = 0;
    const flags = new Array(len).fill(false);

    for (let i = 0; i < len; i++) {
        if (!flags[i]) {
            let j = i;
            while (!flags[i]) {
                j = map.get(nums[j]) ?? 0;
                flags[j] = true;
            }
            loops++;
        }
    }

    return len - loops;
}
