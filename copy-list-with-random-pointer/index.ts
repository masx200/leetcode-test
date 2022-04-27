import { Node } from "./Node.ts";

const cachedNode = new WeakMap<Node, Node>();
export default function copyRandomList(head: Node | null): Node | null {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        const cloned = new Node();
        cachedNode.set(head, cloned);

        cloned.val = head.val;
        cloned.next = copyRandomList(head.next);
        cloned.random = copyRandomList(head.random);
        return cloned;
        // cachedNode.set(head, {val: head.val}), Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
    }
    const result = cachedNode.get(head);
    return result ? result : null;
}
