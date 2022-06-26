import { DoublyLinkedList } from "../design-linked-list/DoublyLinkedList.ts";

class LFUCache {
    readonly #freq_to_keys = new Map<number, Set<number>>();
    readonly #freq_to_node = new Map<number, DoublyLinkedList<number>>();
    readonly #capacity: number;
    readonly #freq_list_head = DoublyLinkedList<number>();
    readonly #freq_list_tail = DoublyLinkedList<number>();
    constructor(capacity: number) {
        if (capacity < 1) throw Error("capacity invalid");
        this.#capacity = capacity;
        this.#freq_list_head.next = this.#freq_list_tail;
        this.#freq_list_tail.prev = this.#freq_list_head;
    }
    #least_frequently_recently_used_key = (): number | undefined => {
        const least_freq_node = this.#freq_list_head.next;
        const least_frequent = least_freq_node && least_freq_node.val;

        if (typeof least_frequent === "number") {
            const least_freq_keys = this.#freq_to_keys.get(least_frequent);
            if (least_freq_keys && least_freq_keys.size) {
                for (const key of least_freq_keys) {
                    return key;
                }
            }
        }
    };
    #delete(key: number): void {
        const freq = this.#key_to_freq.get(key);
        this.#key_to_freq.delete(key);
        this.#key_to_value.delete(key);
        if (typeof freq !== "undefined") {
            const freq_set = this.#freq_to_keys.get(freq);
            freq_set && freq_set.delete(key);
            if (freq_set && freq_set.size === 0) {
                const node = this.#freq_to_node.get(freq);
                node && this.#remove_node(node);
            }
        }
    }
    get #size() {
        return this.#key_to_freq.size;
    }
    #increase(key: number): void {}
    readonly #key_to_freq: Map<number, number> = new Map();
    readonly #key_to_value: Map<number, number> = new Map();
    get(key: number): number {}

    put(key: number, value: number): void {}
    #insertFirst(node: DoublyLinkedList<number>): void {
        this.#insert_node_after(this.#freq_list_head, node);
    }
    #remove_node(node: DoublyLinkedList<number>): void {
        const prev = node.prev;
        const next = node.next;
        if (prev && next) {
            prev.next = next;

            next.prev = prev;
        }
    }
    #insert_node_after(
        prev_node: DoublyLinkedList<number>,
        new_node: DoublyLinkedList<number>,
    ): void {
        const next = prev_node.next;
        const prev = prev_node;
        if (prev && next) {
            prev.next = new_node;
            new_node.prev = prev;
            new_node.next = next;
            next.prev = new_node;
        }
    }
}
export default LFUCache;
