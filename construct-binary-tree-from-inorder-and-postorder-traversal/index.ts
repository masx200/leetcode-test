import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function buildTree(
    inorder: number[],
    postorder: number[],
): TreeNode | null {
    if (inorder.length === 0) return null;
    let post_idx = postorder.length - 1;
    const idx_map = new Map<number, number>();
    function helper(in_left: number, in_right: number) {
        // 如果这里没有节点构造二叉树了，就结束
        if (in_left > in_right) {
            return null;
        }

        // 选择 post_idx 位置的元素作为当前子树根节点
        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);

        // 根据 root 所在位置分成左右两棵子树
        const index = idx_map.get(root_val) ?? 0;

        // 下标减一
        post_idx--;
        // 构造右子树
        root.right = helper(index + 1, in_right);
        // 构造左子树
        root.left = helper(in_left, index - 1);
        return root;
    }

    // 从后序遍历的最后一个元素开始

    // 建立（元素，下标）键值对的哈希表
    // let idx = 0;
    inorder.forEach((val, idx) => {
        idx_map.set(val, idx);
    });
    return helper(0, inorder.length - 1);
}
