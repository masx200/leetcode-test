import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export default function bstFromPreorder(preorder: number[]): TreeNode | null {
    let index = 0;
    const len = preorder.length;
    return dfs(Number.MIN_VALUE, Number.MAX_VALUE);
    function dfs(lowerBound: number, upperBound: number): TreeNode | null {
        if (index == len) {
            return null;
        }

        const cur = preorder[index];
        if (cur < lowerBound || cur > upperBound) {
            return null;
        }

        index++;
        const root = new TreeNode(cur);
        root.left = dfs(lowerBound, cur);
        root.right = dfs(cur, upperBound);
        return root;
    }
}
