import { assertEquals } from "../deps.ts";
import { ListNode } from "../mod.ts";
import isPalindrome from "./index.ts";

Deno.test("palindrome-linked-list-1", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(2);
    head.next.next.next.next = new ListNode(1);
    assertEquals(isPalindrome(head), true);
});

Deno.test("palindrome-linked-list-2", () => {
    const head = null;

    assertEquals(isPalindrome(head), true);
});
Deno.test("palindrome-linked-list-3", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);

    assertEquals(isPalindrome(head), false);
});
Deno.test("palindrome-linked-list-4", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2, new ListNode(2, new ListNode(1)));

    assertEquals(isPalindrome(head), true);
});
