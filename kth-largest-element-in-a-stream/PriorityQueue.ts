/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// deno-lint-ignore no-explicit-any
export function PriorityQueue<T = any>(
    comparator: (a: T, b: T) => number,
): {
    clear: () => void;
    length: () => number;
    comparator: (a: T, b: T) => number;
    offer: (value: T) => void;
    head: () => T | undefined;
    tail: () => T | undefined;
    pop: () => T | undefined;
    shift: () => T | undefined;
} {
    //默认升序
    //comparator Function used to determine the order of the elements. It is expected to return a negative value if the head argument is less than the second argument, zero if they're equal, and a positive value otherwise.
    const data: T[] = [];
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
    return { clear, length, comparator, offer, head, tail, pop, shift };
}
