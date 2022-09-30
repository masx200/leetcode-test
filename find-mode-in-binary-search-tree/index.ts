import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { default as groupBy } from "https://cdn.skypack.dev/lodash@4.17.21/groupBy?dts";
import inorderTraversal from "../binary-tree-inorder-traversal/index.ts";
export default function findMode(root: TreeNode | null): number[] {
    const cnt = groupBy(inorderTraversal(root));
    const max = Math.max(...Object.values(cnt).map((v) => v.length));
    return Object.keys(cnt)
        .filter((k) => cnt[k].length === max)
        .map(Number);
}
