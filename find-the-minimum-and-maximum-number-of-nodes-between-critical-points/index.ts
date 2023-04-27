import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function nodesBetweenCriticalPoints(
    head: ListNode | null,
): number[] {
    if (!head) return [];
    let minDistance = Infinity;
    let [i, count, firstIndex, preIndex] = [0, 0, -1, -1];
    let preNode = head;
    head = head.next;

    while (head) {
        if (!head.next) break;

        if (
            (head.val > preNode.val && head.val > head.next.val) ||
            (head.val < preNode.val && head.val < head.next.val)
        ) {
            if (firstIndex < 0) firstIndex = i;
            if (preIndex >= 0) {
                minDistance = Math.min(i - preIndex, minDistance);
            }

            preIndex = i;
            count++;
        }

        preNode = head;
        head = head.next;
        i++;
    }

    return count < 2 ? [-1, -1] : [minDistance, preIndex - firstIndex];
}
