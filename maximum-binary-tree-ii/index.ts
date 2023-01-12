import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function insertIntoMaxTree(
    root: TreeNode | null,
    val: number,
): TreeNode | null {
    // 如果root是空节点的话，就以val返回一个新节点
    // 如果 val 是整棵树最大的，那么原来的这棵树应该是 val 节点的左子树，因为 val 节点是接在原始数组 a 的最后一个元素
    if (root == null || root.val < val) {
        return new TreeNode(val, root);
    } // 如果 val 不是最大的，那么就应该在右子树上，因为 val 节点是接在原始数组 a 的最后一个元素
    else {
        root.right = insertIntoMaxTree(root.right, val);

        return root;
    }
}
