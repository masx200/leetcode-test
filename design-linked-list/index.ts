import { DoublyLinkedList } from "./DoublyLinkedList.ts";
// deno-lint-ignore no-explicit-any
interface MyLinkedList<T = any> {
    get(index: number): T | number;

    addAtHead(val: T): void;

    addAtTail(val: T): void;

    addAtIndex(index: number, val: T): void;

    deleteAtIndex(index: number): void;
    length(): number;
    clear(): void;
    deleteAtHead(): void;
    deleteAtTail(): void;
}
// deno-lint-ignore no-explicit-any
function MyLinkedList<T = any>(): MyLinkedList<T> {
    let size = 0;
    //头尾固定的伪节点
    const head: DoublyLinkedList<T> = DoublyLinkedList();
    const tail: DoublyLinkedList<T> = DoublyLinkedList();
    head.next = tail;
    tail.prev = head;

    function get(index: number): T | number {
        if (size === 0) return -1;
        if (index < 0 || index >= size) {
            return -1;
        }
        if (index == 0) {
            if (head.next) {
                const val = head.next.val;
                if (typeof val !== "undefined") {
                    return val;
                }
            }
        }
        if (index === size - 1) {
            if (tail.prev) {
                const val = tail.prev.val;
                if (typeof val !== "undefined") {
                    return val;
                }
            }
        }
        if (index + 1 < size - index) {
            let curr = head;
            for (let i = 0; i < index + 1; i++) {
                if (curr.next) {
                    curr = curr.next;
                }
            }
            const val = curr.val;
            if (typeof val !== "undefined") {
                return val;
            }
        } else {
            let curr = tail;
            for (let i = 0; i < size - index; i++) {
                if (curr.prev) {
                    curr = curr.prev;
                }
            }
            const val = curr.val;
            if (typeof val !== "undefined") {
                return val;
            }
        }
        return -1;
    }

    function addAtHead(val: T): void {
        const succ = head.next;
        const pred = head;
        const toAdd = DoublyLinkedList(val);
        pred.next = toAdd;
        succ && (succ.prev = toAdd);
        toAdd.prev = pred;
        toAdd.next = succ;
        size++;
    }

    function addAtTail(val: T): void {
        const succ = tail;
        const pred = tail.prev;
        const toAdd = DoublyLinkedList(val);
        toAdd.next = succ;
        succ.prev = toAdd;
        toAdd.prev = pred;
        size++;
        pred && (pred.next = toAdd);
    }

    function addAtIndex(index: number, val: T): void {
        if (index > size) {
            return;
        }
        if (index < 0) {
            addAtHead(val);
            return;
        }
        if (index === size) {
            addAtTail(val);
            return;
        }
        let succ = tail;
        let pred = head;

        if (index < size - index) {
            pred = head;
            for (let i = 0; i < index; i++) {
                pred.next && (pred = pred.next);
            }
            pred.next && (succ = pred.next);
        } else {
            succ = tail;
            for (let i = 0; i < size - index; i++) {
                succ.prev && (succ = succ.prev);
            }
            succ.prev && (pred = succ.prev);
        }
        size++;
        const toAdd = DoublyLinkedList(val);
        toAdd.prev = pred;
        toAdd.next = succ;
        pred.next = toAdd;
        succ.prev = toAdd;
    }
    function deleteAtHead(): void {
        if (size) {
            const pred = head;
            const succ = head.next?.next ?? tail;
            pred.next = succ;
            succ.prev = pred;
            size--;
        }
    }
    function deleteAtTail(): void {
        if (size) {
            const pred = tail.prev?.prev ?? head;
            const succ = tail;
            pred.next = succ;
            succ.prev = pred;
            size--;
        }
    }
    function deleteAtIndex(index: number): void {
        if (index < 0 || index >= size) {
            return;
        }
        if (index == 0) {
            // size--;
            deleteAtHead();
            return;
        }
        if (index === size - 1) {
            // size--;
            deleteAtTail();
            return;
        }
        let pred = head;
        let succ = tail;

        if (index < size - index) {
            pred = head;
            for (let i = 0; i < index; i++) {
                pred.next && (pred = pred.next);
            }
            pred.next?.next && (succ = pred.next.next);
        } else {
            succ = tail;
            for (let i = 0; i < size - index - 1; i++) {
                succ.prev && (succ = succ.prev);
            }
            succ.prev?.prev && (pred = succ.prev.prev);
        }
        size--;
        pred.next = succ;
        succ.prev = pred;
    }
    function length(): number {
        return size;
    }
    function clear(): void {
        size = 0;
        head.next = tail;
        tail.prev = head;
    }

    return {
        deleteAtTail,
        deleteAtHead,
        get,
        addAtHead,
        addAtTail,
        addAtIndex,
        deleteAtIndex,
        length,
        clear,
    };
}
export default MyLinkedList;
