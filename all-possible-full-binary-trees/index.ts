import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export default allPossibleFBT;

const memo = new Map<number, Array<TreeNode | null>>();
function allPossibleFBT(N: number): Array<TreeNode | null> {
    const cached = memo.get(N);

    if (!cached) {
        const ans = new Array<TreeNode | null>();
        if (N == 1) {
            ans.push(new TreeNode(0));
        } else if (N % 2 == 1) {
            for (let x = 0; x < N; ++x) {
                const y = N - 1 - x;
                for (const left of allPossibleFBT(x)) {
                    for (const right of allPossibleFBT(y)) {
                        const bns = new TreeNode(0);
                        bns.left = left;
                        bns.right = right;
                        ans.push(bns);
                    }
                }
            }
        }
        memo.set(N, ans);
        return ans;
    }

    return cached;
}
