import { TreeNode } from "../mod.ts";
import { cache } from "../sort-integers-by-the-power-value/cache.ts";

export default function findDuplicateSubtrees(
    root: TreeNode | null
): Array<TreeNode | null> {
    if (!root) return [];

    const hashedtree = new Map<string, TreeNode>();
    const ans = new Map<string, TreeNode>();
    level([root], (nodes) => {
        for (const node of nodes) {
            const hashed = serialize(node);
            if (hashedtree.has(hashed)) {
                ans.set(hashed, node);
            }
            hashedtree.set(hashed, node);
        }
    });
    return Array.from(ans.values());
}

function replacer(value: any): any {
    return value instanceof TreeNode
        ? [value.val, replacer(value.left), replacer(value.right)]
        : value;
}
const serialize = cache(function serialize(root: TreeNode | null): string {
    return JSON.stringify(root, (_key, value) => replacer(value));
});
function level(nodes: TreeNode[], output: (r: TreeNode[]) => void) {
    if (nodes.length === 0) return;

    output(nodes);

    level(
        nodes
            .map((n) => [n.left, n.right].filter(Boolean) as TreeNode[])
            .flat(),
        output
    );
}
