import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
export default function findLeaves(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const parents = new Map<TreeNode, TreeNode | null>();
    const children = new Map<TreeNode, number>();

    let leaves = new Set<TreeNode>();

    dfs(root, null, leaves, parents, children);
    // console.log(parents, children, leaves);
    const res: number[][] = [];
    while (leaves.size) {
        // console.log(leaves, parents, children);
        const temp: typeof leaves = new Set();
        const list: number[] = [];
        for (const node of leaves) {
            list.push(node.val);
            const parent = parents.get(node);
            if (parent) {
                const count = (children.get(parent) ?? 0) - 1;
                children.set(parent, count);
                if (count === 0) temp.add(parent);
            }
        }
        leaves = temp;
        res.push(list);
    }
    return res;
}

function dfs(
    root: TreeNode | null,
    parent: null | TreeNode,
    leaves: Set<TreeNode>,
    parents: Map<TreeNode, TreeNode | null>,
    children: Map<TreeNode, number>,
) {
    if (!root) return;
    if (!root.left && !root.right) {
        leaves.add(root);
    }
    parents.set(root, parent);
    children.set(root, [root.left, root.right].filter(Boolean).length);
    dfs(root.left, root, leaves, parents, children);
    dfs(root.right, root, leaves, parents, children);
}
