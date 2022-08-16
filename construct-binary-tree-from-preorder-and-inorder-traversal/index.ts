import { TreeNode } from "../mod.ts";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;
    const i = inorder.findIndex((x) => x === preorder[0]);

    return new TreeNode(
        preorder[0],
        buildTree(preorder.slice(1, i + 1), inorder.slice(0, i)),
        buildTree(preorder.slice(i + 1), inorder.slice(i + 1)),
    );
}
export default buildTree;
