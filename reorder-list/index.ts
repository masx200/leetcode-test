import { ListNode } from "../reverse-linked-list/ListNode.ts";
export default /**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head) return;

    const nodes: Array<ListNode> = [];
    let current: ListNode | null = head;
    while (current) {
        const next: ListNode | null = current.next;
        nodes.push(current);
        current.next = null;
        current = next;
    }
    // console.log(nodes)
    for (let i = 0; i < nodes.length / 2; i++) {
        const node: ListNode = nodes[i];
        const next: ListNode = nodes[nodes.length - i - 1];
        // console.log(node)
        // console.log(next)
        if (node === next) return;
        node.next = next;
        next.next = nodes[i + 1];
        //    console.log(node)
        // console.log(next)
    }

    nodes[Math.floor(nodes.length / 2)].next = null;
}
