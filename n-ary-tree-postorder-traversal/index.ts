import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";

export default function postorder(root: Node | null): number[] {
    if (!root) {
        return [];
    }
    const res: number[] = [];
    posthelper(root, (a) => res.push(a));
    return res;
}
function posthelper(root: Node | null, output: (a: number) => void) {
    if (!root) {
        return;
    }

    for (const n of root.children) {
        posthelper(n, output);
    }
    output(root.val);
    //     root.children.forEach(n=>{
    //   prehelper(n, output);
    //     })
}
