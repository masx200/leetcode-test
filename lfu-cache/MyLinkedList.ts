import { DoublyLinkedList } from "../design-linked-list/DoublyLinkedList.ts";

// deno-lint-ignore no-explicit-any
export class MyLinkedList<T = any> {
    readonly #list_head = DoublyLinkedList<T>();
    readonly #list_tail = DoublyLinkedList<T>();
    #size: number;
    get length() {
        return this.#size;
    }
    constructor() {
        this.#size = 0;
        this.#list_head.next = this.#list_tail;
        this.#list_tail.prev = this.#list_head;
    }
    isEmpty() {
        return this.#list_head.next === this.#list_tail;
    }
    clear() {
        this.#size = 0;
        this.#list_head.next = this.#list_tail;
        this.#list_tail.prev = this.#list_head;
    }
    lastNode() {
        return this.#list_tail.prev === this.#list_head
            ? null
            : this.#list_tail.prev;
    }
    firstNode() {
        return this.#list_head.next === this.#list_tail
            ? null
            : this.#list_head.next;
    }
    removeFirst() {
        const node = this.firstNode();
        node && this.removeNode(node);
    }
    removeLast() {
        const node = this.lastNode();
        node && this.removeNode(node);
    }
    addFirst(node: DoublyLinkedList<T>): void {
        this.addAfter(this.#list_head, node);
    }
    addLast(node: DoublyLinkedList<T>): void {
        this.addBefore(this.#list_tail, node);
    }
    addBefore(
        next_node: DoublyLinkedList<T>,
        new_node: DoublyLinkedList<T>,
    ): void {
        const next = next_node;
        const prev = next_node.prev;
        if (prev && next) {
            prev.next = new_node;
            new_node.prev = prev;
            new_node.next = next;
            next.prev = new_node;
            this.#size++;
        } else {
            throw Error("next prev_node not in list");
        }
    }
    removeNode(node: DoublyLinkedList<T>): void {
        const prev = node.prev;
        const next = node.next;
        if (prev && next) {
            prev.next = next;

            next.prev = prev;
            this.#size--;
        } else {
            throw Error("next prev node not in list");
        }
    }
    addAfter(
        prev_node: DoublyLinkedList<T>,
        new_node: DoublyLinkedList<T>,
    ): void {
        const next = prev_node.next;
        const prev = prev_node;
        if (prev && next) {
            prev.next = new_node;
            new_node.prev = prev;
            new_node.next = next;
            next.prev = new_node;
            this.#size++;
        } else {
            throw Error("next prev_node not in list");
        }
    }
}
