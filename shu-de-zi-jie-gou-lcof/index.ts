import { TreeNode } from "../mod.ts";

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    return Boolean(
        A &&
            B &&
            (helper(A, B) ||
                isSubStructure(A.left, B) ||
                isSubStructure(A.right, B)),
    );
}
export default isSubStructure;

function helper(A: TreeNode | null, B: TreeNode | null): boolean {
    if (!B) return true;
    if (!A) return false;
    if (A.val !== B.val) return false;
    return helper(A.left, B.left) && helper(A.right, B.right);
}
