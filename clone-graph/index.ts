import { Node } from './Node.ts';

const visited = new WeakMap<Node, Node>();
export default function cloneGraph(node: Node | null): Node | null {
    if (!node) {
        return node;
    }
    if (visited.has(node)) {
        const cached = visited.get(node);
        if (cached) {
            return cached;
        } else {
            return null;
        }
    }
    const cloneNode = new Node(node.val, []);
    visited.set(node, cloneNode);
    for (const neighbor of node.neighbors) {
        const cloned = cloneGraph(neighbor);
        cloned && cloneNode.neighbors.push(cloned);
    }
    return cloneNode;
}
