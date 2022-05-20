import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
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
interface Signal {
    aborted: boolean;
}
function inorder(
    root: TreeNode | null,
    output: (a: number) => void,
    signal?: Signal,
) {
    if (signal?.aborted) return;
    if (!root) return;
    inorder(root.left, output, signal);
    if (signal?.aborted) return;
    output(root.val);
    inorder(root.right, output, signal);
}
