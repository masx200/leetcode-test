import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { inorder } from "./inorder.ts";
export default function isValidBST(root: TreeNode | null): boolean {
    const signal: Signal = { aborted: false };
    if (!root) return false;
    let result = true;
    let last: number | undefined;
    inorder(
        root,
        (a) => {
            if (signal.aborted) throw Error("aborted");

            if (typeof last === "undefined") {
                last = a;
            } else {
                if (a > last) {
                    last = a;
                } else {
                    signal.aborted = true;
                    result = false;
                }
            }
        },
        signal,
    );
    return result;
}
export interface Signal {
    aborted: boolean;
}
