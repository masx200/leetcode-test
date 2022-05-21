import { Node } from "./Node.ts";

export default function connect(root: Node | null): Node | null {
    if (!root) return null;
    let nodes: Node[] = [root];
    while (nodes.length) {
        if (nodes.length > 1) {
            for (const [index, value] of nodes.entries()) {
                const next = nodes[index + 1];
                if (next) {
                    value.next = next;
                }
            }
        }
        const children: Node[] = [];
        for (const node of nodes) {
            for (const child of [node.left, node.right]) {
                if (child) {
                    children.push(child);
                }
            }
        }
        nodes = children;
    }
    return root;
}
