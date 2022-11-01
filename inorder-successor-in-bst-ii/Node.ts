export class Node {
    constructor(
        public val = 0,
        public parent: Node | null = null,
        public left: Node | null = null,
        public right: Node | null = null,
    ) {}
}
export function inorder(node: Node | null, callback: (node: Node) => void) {
    if (node) {
        inorder(node.left, callback);

        callback(node);
        inorder(node.right, callback);
    }
}
