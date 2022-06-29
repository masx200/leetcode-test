import { assertEquals } from "../deps.ts";
import { ListNode } from "../mod.ts";
import getIntersectionNode from "./index.ts";

Deno.test("intersection-of-two-linked-lists-1", () => {
    const Intersected = new ListNode(8, new ListNode(4, new ListNode(5)));

    const headA = new ListNode(4, new ListNode(1, Intersected));
    const headB = new ListNode(
        5,
        new ListNode(0, new ListNode(1, Intersected)),
    );

    assertEquals(Intersected, getIntersectionNode(headA, headB));
});

Deno.test("intersection-of-two-linked-lists-2", () => {
    const Intersected = new ListNode(2, new ListNode(4));

    const headA = new ListNode(
        0,
        new ListNode(9, new ListNode(1, Intersected)),
    );
    const headB = new ListNode(3, Intersected);

    assertEquals(Intersected, getIntersectionNode(headA, headB));
});

Deno.test("intersection-of-two-linked-lists-3", () => {
    const Intersected = null;
    const headA = new ListNode(2, new ListNode(6, new ListNode(4)));
    const headB = new ListNode(1, new ListNode(5));

    assertEquals(Intersected, getIntersectionNode(headA, headB));
});
