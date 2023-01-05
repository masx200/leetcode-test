import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function nextLargerNodes(head: ListNode | null): number[] {
    const res: number[] = [];

    const stack: Array<ListNode | null> = [];

    function dfs(head: ListNode | null) {
        if (head === null) return;
        stack.push(head);
        dfs(head.next);
    }
    // 入栈 逆序遍历
    dfs(head);
    // 使用单调栈 栈顶元素记录距离最近的更大元素
    const monotoneStack: number[] = [];
    while (stack.length > 0) {
        const node = stack.pop() as ListNode;
        while (
            monotoneStack.length > 0 &&
            monotoneStack[monotoneStack.length - 1] <= node.val
        ) {
            monotoneStack.pop();
        }
        res.push(
            monotoneStack.length > 0
                ? monotoneStack[monotoneStack.length - 1]
                : 0,
        );
        monotoneStack.push(node.val);
    }

    return res.reverse();
}
