import { Node } from "./Node.ts";

export default function levelOrder(root: Node | null): number[][] {
    if (!root) return [];
    const current: Node[] = [root];
    const result: number[][] = [];

    level(current, (r) => result.push(r));
    return result;
}
function level(nodes: Node[], output: (r: number[]) => void) {
    if (nodes.length === 0) return;

    output(nodes.map((n) => n.val));

    level(nodes.map((n) => n.children).flat(), output);
}
