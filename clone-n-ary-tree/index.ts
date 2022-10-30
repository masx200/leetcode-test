import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";

export default function cloneTree(root: Node | null): Node | null {
    if (!root) return root;
    const r = new Node(root.val);
    for (const c of root.children) {
        const child = cloneTree(c);
        child && r.children.push(child);
    }
    return r;
}
