// deno-lint-ignore no-explicit-any
export interface DoublyLinkedList<T = any> {
    val?: T;
    next?: DoublyLinkedList | null;
    prev?: DoublyLinkedList | null;
}
// deno-lint-ignore no-explicit-any
export function DoublyLinkedList<T = any>(
    val?: T,
    next?: DoublyLinkedList,
    prev?: DoublyLinkedList,
): DoublyLinkedList<T> {
    return { val, prev, next };
}
