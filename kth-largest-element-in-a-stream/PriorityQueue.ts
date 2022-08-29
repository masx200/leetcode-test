import { Heap } from "../deps.ts";

export interface PriorityQueue<T = any> {
    isEmpty(): boolean;

    clear: () => void;

    length: () => number;

    comparator: (a: T, b: T) => number;

    offer: (value: T) => void;

    head: () => T | undefined;

    shift: () => T | undefined;
    toArray(): T[];
}

export function PriorityQueue<T = any>(
    comparator: (a: T, b: T) => number,
    values?: T[],
): PriorityQueue<T> {
    if (typeof comparator !== "function") {
        throw Error("expect comparator to be function");
    }
    const data = new Heap<T>((a, b) => comparator(a, b));
    values?.forEach((v) => data.push(v));

    function length(): number {
        return data.size();
    }

    function offer(value: T) {
        data.push(value);
    }
    function head() {
        // console.log(data)
        if (!data.size()) {
            return undefined;
        }
        return data.top();
    }

    function shift() {
        // console.log(data)
        return data.pop();
    }
    function clear() {
        data.clear();
    }

    function toArray() {
        return Array.from(data.sort()).sort(comparator) as T[];
    }
    function isEmpty() {
        return data.isEmpty();
    }
    return {
        isEmpty,
        toArray,
        clear,
        length,
        comparator,
        offer,
        head,

        shift,
    };
}
