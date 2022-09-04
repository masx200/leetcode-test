import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function findDuplicateSubtrees(root: TreeNode | null) {
    if (!root) return [];
    const seen = new Map<string, [node: TreeNode | null, index: number]>();
    const repeat = new Set<TreeNode | null>();
    let idx = 0;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return 0;
        }
        const tri = [node.val, dfs(node.left), dfs(node.right)];
        const hash = JSON.stringify(tri);
        const pair = seen.get(hash);
        if (seen.has(hash) && pair) {
            repeat.add(pair[0]);
            return pair[1];
        } else {
            seen.set(hash, [node, ++idx]);
            return idx;
        }
    };
    dfs(root);
    return [...repeat];
}
export default findDuplicateSubtrees;
