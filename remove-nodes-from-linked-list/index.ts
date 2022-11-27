import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function removeNodes(head: ListNode | null): ListNode | null {
    return dfs(head)[0];
}
function dfs(node: ListNode | null): [ListNode | null, number] {
    if (!node) {
        return [null, 0];
    }
    const [next, max] = dfs(node.next);
    if (max > node.val) {
        return [next, max];
    }
    node.next = next;
    return [node, node.val];
}
