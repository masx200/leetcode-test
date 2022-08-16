export default MyCircularQueue;
type MyCircularQueue<T = any> = {
    isEmpty: () => boolean;
    Front: () => T | number;
    deQueue: () => boolean;
    enQueue: (value: T) => boolean;
    Rear: () => T | number;
    isFull: () => boolean;
    capacity: number;
};
function MyCircularQueue<T = any>(capacity = Infinity): MyCircularQueue<T> {
    if (capacity < 1) {
        throw Error("k greater than or equal  one");
    }
    const storage = new Map<bigint, T>();
    let min = BigInt(0);
    let max = BigInt(0);
    const initial = 0n;
    function enQueue(value: T): boolean {
        if (isFull()) {
            return false;
        }

        if (storage.size) {
            storage.set(max + 1n, value);
            max++;
        } else {
            storage.set(initial, value);
            max = initial;
        }

        return true;
    }

    function deQueue(): boolean {
        if (isEmpty()) {
            return false;
        } else {
            storage.delete(min);
            min++;
            if (storage.size === 0) {
                min = initial;
            }
            return true;
        }
    }

    function Front(): T | number {
        if (isEmpty()) {
            return -1;
        }
        const r = storage.get(min);
        return r as T;
    }

    function isEmpty(): boolean {
        return 0 === storage.size;
    }
    function Rear(): T | number {
        if (isEmpty()) {
            return -1;
        }

        const r = storage.get(max);

        return r as T;
    }
    function isFull(): boolean {
        return storage.size >= capacity;
    }
    return {
        isEmpty,
        Front,
        deQueue,
        enQueue,
        Rear,
        isFull,
        capacity: capacity,
    };
}
