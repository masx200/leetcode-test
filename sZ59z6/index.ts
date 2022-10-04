import { TreeNode } from "../mod.ts";

export default function numColor(root: TreeNode | null): number {
    if (!root) return 0;
    const set = new Set<number>();

    const q = [root];

    for (const node of q) {
        set.add(node.val);
        ([node.left, node.right].filter(Boolean) as typeof q).forEach((n) =>
            q.push(n)
        );
    }
    return set.size;
}
