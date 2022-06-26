import { DoublyLinkedList } from "../design-linked-list/DoublyLinkedList.ts";

export class MyLinkedList<T = number> {
    readonly #freq_list_head = DoublyLinkedList<T>();
    readonly #freq_list_tail = DoublyLinkedList<T>();
    constructor() {
        this.#freq_list_head.next = this.#freq_list_tail;
        this.#freq_list_tail.prev = this.#freq_list_head;
    }
    isEmpty() {
        return this.#freq_list_head.next === this.#freq_list_tail;
    }
    clear() {
        this.#freq_list_head.next = this.#freq_list_tail;
        this.#freq_list_tail.prev = this.#freq_list_head;
    }
    last_node() {
        return this.#freq_list_tail.prev === this.#freq_list_head
            ? null
            : this.#freq_list_tail.prev;
    }
    first_node() {
        return this.#freq_list_head.next === this.#freq_list_tail
            ? null
            : this.#freq_list_head.next;
    }
    insert_First(node: DoublyLinkedList<T>): void {
        this.insert_After(this.#freq_list_head, node);
    }
    remove_node(node: DoublyLinkedList<T>): void {
        const prev = node.prev;
        const next = node.next;
        if (prev && next) {
            prev.next = next;

            next.prev = prev;
        } else {
            throw Error("next prev node not in list");
        }
    }
    insert_After(
        prev_node: DoublyLinkedList<T>,
        new_node: DoublyLinkedList<T>
    ): void {
        const next = prev_node.next;
        const prev = prev_node;
        if (prev && next) {
            prev.next = new_node;
            new_node.prev = prev;
            new_node.next = next;
            next.prev = new_node;
        } else {
            throw Error("next prev_node not in list");
        }
    }
}
