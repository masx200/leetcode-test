// deno-lint-ignore no-explicit-any
export interface DoublyLinkedList<T = any> {
    val?: T;
    next?: DoublyLinkedList<T> | null;
    prev?: DoublyLinkedList<T> | null;
}
// deno-lint-ignore no-explicit-any
export function DoublyLinkedList<T = any>(
    val?: T,
    next?: DoublyLinkedList<T>,
    prev?: DoublyLinkedList<T>,
): DoublyLinkedList<T> {
    return { val, prev, next };
}
