import inorderTraversal from "../binary-tree-inorder-traversal/index.ts";
import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { lowerBound } from "../maximum-profit-in-job-scheduling/lowerBound.ts";
import { upperBound } from "../maximum-profit-in-job-scheduling/upperBound.ts";

export default function closestNodes(
    root: TreeNode | null,
    queries: number[],
): number[][] {
    const nums = inorderTraversal(root);

    return queries.map((v) => {
        const left = lowerBound(0, nums.length, (m) => nums[m] <= v);
        const mini = nums[left - 1] <= v ? nums[left - 1] : -1;
        const right = upperBound(0, nums.length, (m) => nums[m] >= v);
        const maxi = nums[right] >= v ? nums[right] : -1;
        return [mini, maxi];
    });
}
