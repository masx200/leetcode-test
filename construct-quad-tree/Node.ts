export default class Node {
    val: boolean;
    isLeaf: boolean;
    topLeft: Node | null;
    topRight: Node | null;
    bottomLeft: Node | null;
    bottomRight: Node | null;
    constructor(
        val?: boolean,
        isLeaf?: boolean,
        topLeft?: Node | null,
        topRight?: Node | null,
        bottomLeft?: Node | null,
        bottomRight?: Node | null,
    ) {
        this.val = val === undefined ? false : val;
        this.isLeaf = isLeaf === undefined ? false : isLeaf;
        this.topLeft = topLeft === undefined ? null : topLeft;
        this.topRight = topRight === undefined ? null : topRight;
        this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
        this.bottomRight = bottomRight === undefined ? null : bottomRight;
    }
}
