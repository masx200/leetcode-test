export default interface MyCircularDeque<T = any> {
    isEmpty: () => boolean;
    getFront: () => T | number;
    deleteFront: () => boolean;
    insertLast: (value: T) => boolean;
    insertFront: (value: T) => boolean;
    deleteLast: () => boolean;
    getRear: () => T | number;
    isFull: () => boolean;
    capacity: number;
}

export default function MyCircularDeque<T = any>(
    capacity = Infinity,
): MyCircularDeque<T> {
    if (capacity < 1) throw Error("k greater than or equal  one");
    const storage = new Map<bigint, T>();
    let min = BigInt(0);
    let max = BigInt(0);
    const initial = 0n;
    function insertLast(value: T): boolean {
        if (isFull()) return false;

        if (storage.size) {
            storage.set(max + 1n, value);
            max++;
        } else {
            storage.set(initial, value);
            max = initial;
        }

        return true;
    }

    function deleteFront(): boolean {
        if (isEmpty()) return false;
        else {
            storage.delete(min);
            min++;
            if (storage.size === 0) {
                min = initial;
            }
            return true;
        }
    }

    function getFront(): T | number {
        if (isEmpty()) return -1;
        const r = storage.get(min);
        return r as T;
    }

    function isEmpty(): boolean {
        return 0 === storage.size;
    }
    function insertFront(value: T): boolean {
        if (isFull()) return false;
        if (storage.size) {
            storage.set(min - 1n, value);
            min--;
        } else {
            storage.set(initial, value);
            min = initial;
        }
        return true;
    }
    function deleteLast(): boolean {
        if (isEmpty()) return false;
        else {
            storage.delete(max);
            max--;
            if (storage.size === 0) {
                max = initial;
            }
            return true;
        }
    }
    function getRear(): T | number {
        if (isEmpty()) return -1;

        const r = storage.get(max);

        return r as T;
    }
    function isFull(): boolean {
        return storage.size >= capacity;
    }
    return {
        isEmpty,
        getFront,
        deleteFront,
        insertLast,
        insertFront,
        deleteLast,
        getRear,
        isFull,
        capacity: capacity,
    };
}
