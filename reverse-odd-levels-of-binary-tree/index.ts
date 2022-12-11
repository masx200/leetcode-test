import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { level } from "./level.ts";

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    let depth = 0;
    level([root], (nodes) => {
        if (depth & 1) {
            nodes
                .map((a) => a.val)
                .reverse()
                .forEach((v, i) => (nodes[i].val = v));
        }
        depth++;
    });
    return root;
}
export default reverseOddLevels;
