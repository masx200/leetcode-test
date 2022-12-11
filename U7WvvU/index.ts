import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function closeLampInTree(root: TreeNode | null): number {
    function dfs(root: TreeNode | null) {
        if (!root) return [0, 0, 0, 0]; // 空节点不需要操作

        const [lAllOpen, lAllClose, lJustSelf, lJustNotSelf] = dfs(root.left);
        const [rAllOpen, rAllClose, rJustSelf, rJustNotSelf] = dfs(root.right);

        const open = lAllOpen + rAllOpen;
        const close = lAllClose + rAllClose;
        const self = lJustSelf + rJustSelf;
        const notSelf = lJustNotSelf + rJustNotSelf;

        let allOpen = Infinity;
        let allClose = Infinity;
        let justSelf = Infinity;
        let justNotSelf = Infinity;

        // 想达到全开
        if (root.val) {
            // 若当前灯开
            // 左右全开
            allOpen = Math.min(allOpen, open, close + 2, self + 2, notSelf + 2);
        } else {
            // 若当前灯关
            allOpen = Math.min(
                allOpen,
                open + 1,
                close + 1,
                self + 3,
                notSelf + 1
            );
        }

        // 想达到全关
        if (root.val) {
            // 灯自己开着
            allClose = Math.min(
                allClose,
                open + 1,
                close + 1,
                self + 1,
                notSelf + 3
            );
        } else {
            allClose = Math.min(
                allClose,
                open + 2,
                close,
                self + 2,
                notSelf + 2
            );
        }

        // 达到只有头开着
        if (root.val) {
            justSelf = Math.min(
                justSelf,
                open + 2,
                close,
                self + 2,
                notSelf + 2
            );
        } else {
            // 关着
            justSelf = Math.min(
                justSelf,
                open + 1,
                close + 1,
                self + 1,
                notSelf + 3
            );
        }

        // 达到只有头关着
        if (root.val) {
            // 头开着
            justNotSelf = Math.min(
                justNotSelf,
                open + 1,
                close + 1,
                self + 3,
                notSelf + 1
            );
        } else {
            justNotSelf = Math.min(
                justNotSelf,
                open,
                close + 2,
                self + 2,
                notSelf + 2
            );
        }

        return [allOpen, allClose, justSelf, justNotSelf];
    }

    const [, allClose] = dfs(root);
    return allClose;
}
