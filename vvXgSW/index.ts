import mergeTwoLists from "../merge-two-sorted-lists/index.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function mergeKLists(
    lists: Array<ListNode | null>,
): ListNode | null {
    const listsnotnull = lists.filter((a) => !!a) as Array<ListNode>;

    if (listsnotnull.length === 0) return null;
    if (listsnotnull.length === 1) return listsnotnull[0];
    if (listsnotnull.length === 2) {
        return mergeTwoLists(listsnotnull[0], listsnotnull[1]);
    }

    if (listsnotnull.length % 2) {
        return mergeTwoLists(
            listsnotnull[0],
            mergeKLists(listsnotnull.slice(1)),
        );
    } else {
        const half = Math.floor(lists.length / 2) - 1;
        return mergeKLists([
            mergeKLists(listsnotnull.slice(0, half)),
            mergeKLists(listsnotnull.slice(half, half + 2)),
            mergeKLists(listsnotnull.slice(half + 2)),
        ]);
    }
}
