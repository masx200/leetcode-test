import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function recoverFromPreorder(
    traversal: string,
): TreeNode | null {
    const depth_to_tree = new Map<number, TreeNode>();
    for (const [depth, value] of parse(traversal)) {
        const tree = new TreeNode(value);
        if (depth > 0) {
            const parent = depth_to_tree.get(depth - 1);
            if (parent) {
                if (parent.left) parent.right = tree;
                else {
                    parent.left = tree;
                }
            }
        }
        depth_to_tree.set(depth, tree);
    }
    return depth_to_tree.get(0) ?? null;
}
function* parse(s: string): Generator<[number, number]> {
    let depth = 0;
    let value = 0;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] === "-") {
            depth++;
            continue;
        }
        while (i < len && /\d/.test(s[i])) {
            value = value * 10 + Number(s[i]);
            i++;
        }
        i--;
        yield [depth, value];
        depth = 0;
        value = 0;
    }
}
