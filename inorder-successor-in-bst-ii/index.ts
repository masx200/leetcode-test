export class Node {
    constructor(
        public val = 0,
        public left: Node | null = null,
        public right: Node | null = null,
        public parent: Node | null = null,
    ) {}
}
export default function inorderSuccessor(x: Node): Node | null {
    if (x.right != null) {
        // 有右子树，则后继在树的相对较低的地方，往下走，尽量往右子树的左边走
        x = x.right;
        while (x.left != null) x = x.left;
        return x;
    } else {
        // 没有右子树,则后继在树的相对较高的地方，往上找
        // 直到找到一个祖宗节点 tmp，它是它父节点的左子节点
        while (x.parent != null && x == x.parent.right) x = x.parent;
        // x.parent == null 或 x == x.parent.left
        return x.parent;
    }
}
