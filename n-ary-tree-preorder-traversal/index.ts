import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";

export default function preorder(root: Node | null): number[] {
    if (!root) {
        return [];
    }
    const res: number[] = [];
    prehelper(root, (a) => res.push(a));
    return res;
}
function prehelper(root: Node | null, output: (a: number) => void) {
    if (!root) {
        return;
    }
    output(root.val);
    for (const n of root.children) {
        prehelper(n, output);
    }
    //     root.children.forEach(n=>{
    //   prehelper(n, output);
    //     })
}
