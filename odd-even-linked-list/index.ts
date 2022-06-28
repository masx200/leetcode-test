import { ListNode } from "../mod.ts";

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let odd: ListNode | null | undefined = head;
    let even: ListNode | null | undefined = head.next;
    if (!even) return head;

    const evenHead = even;
    let oddlast = odd;
    while (even && odd) {
        // console.log(even,odd)
        const nextodd: ListNode | null | undefined = odd.next?.next ?? null;

        const nexteven: ListNode | null | undefined = even.next?.next ?? null;
        odd.next = nextodd;
        even.next = nexteven;
        if (odd) {
            oddlast = odd;
        }
        odd = nextodd;
        even = nexteven;
    }
    // console.log(oddlast)

    if (oddlast.next) {
        oddlast.next.next = evenHead;
    } else {
        oddlast && (oddlast.next = evenHead);
    }

    // console.log(even,odd)
    // console.log(head,evenHead)
    return head;
}
export default oddEvenList;
