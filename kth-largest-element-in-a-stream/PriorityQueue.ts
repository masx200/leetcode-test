// deno-lint-ignore no-explicit-any
export interface PriorityQueue<T = any> {
    /**clear all elements */
    clear: () => void;
    /**get length of elements */
    length: () => number;
    /** comparator Function used to determine the order of the elements. It is expected to return a negative value if the head argument is less than the second argument, zero if they're equal, and a positive value otherwise. */
    comparator: (a: T, b: T) => number;
    /**add one element  */
    offer: (value: T) => void;
    /** get min element */
    head: () => T | undefined;
    /** get max element */
    tail: () => T | undefined;
    /**get and delete max element */
    pop: () => T | undefined;
    /**get and delete min element */
    shift: () => T | undefined;
    // at: (index: number) => T | undefined;
    toArray(): T[];
}

/**
 * comparator Function used to determine the order of the elements. It is expected to return a negative value if the head argument is less than the second argument, zero if they're equal, and a positive value otherwise.
 */
// deno-lint-ignore no-explicit-any
export function PriorityQueue<T = any>(
    /** comparator Function used to determine the order of the elements. It is expected to return a negative value if the head argument is less than the second argument, zero if they're equal, and a positive value otherwise. */
    comparator: (a: T, b: T) => number,
    values?: T[],
): PriorityQueue<T> {
    //默认升序
    //comparator Function used to determine the order of the elements. It is expected to return a negative value if the head argument is less than the second argument, zero if they're equal, and a positive value otherwise.
    const data: T[] = [];
    if (values?.length) {
        values.forEach((value) => offer(value));
    }
    function length(): number {
        return data.length;
    }
    function swap(i1: number, i2: number) {
        [data[i1], data[i2]] = [data[i2], data[i1]];
    }
    function bubble_head_to_tail() {
        if (data.length < 2) {
            return;
        }
        for (let i = 0, j = 1; j < data.length && i < data.length; i++, j++) {
            if (comparator(data[i], data[j]) > 0) {
                swap(i, j);
            } else {
                break;
            }
        }
    }
    function bubble_tail_to_head() {
        if (data.length < 2) {
            return;
        }

        for (
            let i = data.length - 2, j = data.length - 1;
            j >= 0 && i >= 0;
            i--, j--
        ) {
            if (comparator(data[i], data[j]) > 0) {
                swap(i, j);
            } else {
                break;
            }
        }
    }

    function offer(value: T) {
        const f = head();
        if (typeof f === "undefined") {
            data.push(value);
            return;
        }
        const l = tail();
        if (typeof l === "undefined") {
            data.push(value);
            return;
        }
        if (comparator(value, l) > 0) {
            data.push(value);
        } else if (comparator(value, f) < 0) {
            data.unshift(value);
        } else {
            if (comparator(value, data[Math.floor(data.length / 2)]) > 0) {
                data.push(value);
                bubble_tail_to_head();
            } else {
                data.unshift(value);
                bubble_head_to_tail();
            }
        }
    }
    function head() {
        if (!data.length) {
            return undefined;
        }
        return data[0];
    }
    function tail() {
        if (!data.length) {
            return undefined;
        }
        return data[data.length - 1];
    }
    function pop() {
        return data.pop();
    }
    function shift() {
        return data.shift();
    }
    function clear() {
        data.length = 0;
    }
    //function at(index: number): T | undefined {
    //    return data.at(index);
    // }
    function toArray() {
        return Array.from(data);
    }
    return {
        toArray,
        clear,
        length,
        comparator,
        offer,
        head,
        tail,
        pop,
        shift, /*, at*/
    };
}
