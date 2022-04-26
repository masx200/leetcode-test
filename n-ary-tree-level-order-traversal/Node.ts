export class Node {
    val: number;
    children: Node[];
    constructor(val?: number, children?: Node[]) {
        this.val = val === undefined ? 0 : val;
        this.children = children === undefined ? [] : children;
    }
}
