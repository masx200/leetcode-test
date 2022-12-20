import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

const memo = new Map<string, Array<TreeNode | null>>();
export default function generateTrees(n: number): Array<TreeNode | null> {
    if (n == 0) return [];
    // 备忘录，避免重复计算

    /* 构造闭区间 [lo, hi] 组成的 BST */
    function build(lo: number, hi: number): Array<TreeNode | null> {
        const res: Array<TreeNode | null> = [];
        // base case，显然当lo > hi闭区间[lo, hi]肯定是个空区间，也就对应着空节点 null，
        if (lo > hi) {
            res.push(null);
            return res;
        }
        const memoKey = JSON.stringify([lo, hi]);
        const cached = memo.get(memoKey);
        // 如果缓存当中有就直接拿
        if (memo.has(memoKey) && cached) return cached;
        // 1、穷举 root 节点的所有可能。
        for (let i = lo; i <= hi; i++) {
            // 2、递归构造出左右子树的所有合法 BST。
            const leftTree = build(lo, i - 1);
            const rightTree = build(i + 1, hi);
            // 3、给 root 节点穷举所有左右子树的组合。
            for (const left of leftTree) {
                for (const right of rightTree) {
                    res.push(new TreeNode(i, left, right));
                }
            }
        }
        // 将结果集放入到缓存中
        memo.set(memoKey, res);
        return res;
    }
    // 构造闭区间 [1, n] 组成的 BST
    return build(1, n);
}
