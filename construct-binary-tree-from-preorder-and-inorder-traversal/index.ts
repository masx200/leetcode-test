import { TreeNode } from "../mod.ts";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const map = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    function helper(
        pStart: number,
        pEnd: number,
        iStart: number,
        iEnd: number,
    ): TreeNode | null {
        if (pStart > pEnd) {
            return null;
        }
        const rootVal = preorder[pStart];
        const root = new TreeNode(rootVal);
        const mid = map.get(rootVal) ?? 0;
        const leftnum = mid - iStart;
        root.left = helper(pStart + 1, pStart + leftnum, iStart, mid - 1);
        root.right = helper(pStart + leftnum + 1, pEnd, mid + 1, iEnd);
        return root;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
}
export default buildTree;
