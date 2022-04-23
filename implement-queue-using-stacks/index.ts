// deno-lint-ignore no-explicit-any
export default function MyQueue<T = any>(): {
    empty: () => boolean;
    peek: () => T;
    pop: () => T;
    push: (x: T) => void;
} {
    const storage = new Map<bigint, T>();
    let left = BigInt(0);
    let right = BigInt(0);
    function push(x: T): void {
        storage.set(right, x);
        right++;
    }

    function pop(): T {
        const r = storage.get(left);
        storage.delete(left);
        left++;
        return r as T;
    }

    function peek(): T {
        const r = storage.get(left);
        return r as T;
    }

    function empty(): boolean {
        return left === right;
    }
    return { empty, peek, pop, push };
}
