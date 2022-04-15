export default function kthToLast(head: ListNode | null, k: number): number {
    const r = getKthFromEnd(head, k);
    if (r) return r.val;
    else return 0;
}
import getKthFromEnd from "../lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/index.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
