import { ListNode } from "../reverse-linked-list/ListNode.ts";

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;

    const nodes: Array<ListNode> = [];

    let current: ListNode | null = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }

    [nodes[k - 1].val, nodes[nodes.length - k].val] = [
        nodes[nodes.length - k].val,
        nodes[k - 1].val,
    ];

    return head;
}
export default swapNodes;
