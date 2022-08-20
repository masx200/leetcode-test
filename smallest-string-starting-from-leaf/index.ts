import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function smallestFromLeaf(root: TreeNode | null): string {
    if (!root) return "";

    const strs: string[] = [];
    let cur = [{ node: root, str: intToChar(root.val) }];
    while (cur.length) {
        const tem: typeof cur = [];

        for (const a of cur) {
            if (!a.node.left && !a.node.right) {
                strs.push(a.str);
            }
            if (a.node.left) {
                tem.push({
                    node: a.node.left,
                    str: intToChar(a.node.left.val) + a.str,
                });
            }
            if (a.node.right) {
                tem.push({
                    node: a.node.right,
                    str: intToChar(a.node.right.val) + a.str,
                });
            }
        }
        if (tem.length) {
            cur = tem;
        } else {
            break;
        }
    }

    return strs.reduce((a, v) => (a.localeCompare(v) < 0 ? a : v));
}
function intToChar(i: number) {
    return String.fromCharCode(i + "a".charCodeAt(0));
}
