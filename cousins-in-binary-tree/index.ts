import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function isCousins(
    root: TreeNode | null,
    x: number,
    y: number
): boolean {
    if (!root) return false;
    let current_level: { child: TreeNode; parent: TreeNode | null }[] = [
        {
            child: root,
            parent: null,
        },
    ];
    while (current_level.length > 0) {
        if (current_level.length >= 2) {
            const values: Map<number, TreeNode | null> = new Map(
                current_level.map((t) => [t.child.val, t.parent])
            );
            if (
                values.has(x) &&
                values.has(y) &&
                values.get(x) !== values.get(y)
            ) {
                return true;
            }
        }

        current_level = current_level
            .map((t) => {
                const res: typeof current_level = [];
                for (const left of [t.child.left, t.child.right]) {
                    if (left) res.push({ child: left, parent: t.child });
                }

                return res;
            })
            .flat();
    }
    return false;
}
