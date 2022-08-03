import { TreeNode } from "../mod.ts";
import { Values } from "./Values.ts";
function evaluateTree(root: TreeNode | null): boolean {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return root.val === Values.True;
    } else {
        const left = evaluateTree(root.left);
        const right = evaluateTree(root.right);
        const result = root.val === Values.Or ? left || right : left && right;
        return result;
    }
}
export default evaluateTree;
