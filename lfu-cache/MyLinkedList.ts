import { DoublyLinkedList } from "../design-linked-list/DoublyLinkedList.ts";

export class MyLinkedList<T = number> {
    readonly #list_head = DoublyLinkedList<T>();
    readonly #list_tail = DoublyLinkedList<T>();
    constructor() {
        this.#list_head.next = this.#list_tail;
        this.#list_tail.prev = this.#list_head;
    }
    isEmpty() {
        return this.#list_head.next === this.#list_tail;
    }
    clear() {
        this.#list_head.next = this.#list_tail;
        this.#list_tail.prev = this.#list_head;
    }
    last_node() {
        return this.#list_tail.prev === this.#list_head
            ? null
            : this.#list_tail.prev;
    }
    first_node() {
        return this.#list_head.next === this.#list_tail
            ? null
            : this.#list_head.next;
    }
    insert_First(node: DoublyLinkedList<T>): void {
        this.insert_After(this.#list_head, node);
    }
    append_last(node: DoublyLinkedList<T>): void {
        this.insert_Before(this.#list_tail, node);
    }
    insert_Before(
        next_node: DoublyLinkedList<T>,
        new_node: DoublyLinkedList<T>
    ): void {
        const next = next_node;
        const prev = next_node.prev;
        if (prev && next) {
            prev.next = new_node;
            new_node.prev = prev;
            new_node.next = next;
            next.prev = new_node;
        } else {
            throw Error("next prev_node not in list");
        }
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
