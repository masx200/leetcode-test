export class BinaryIndexTree<T = number> {
    defaultValue: T;
    operation: (existing: T, applied: T) => T;

    #tree: T[];
    constructor(
        public size: number,
        options: {
            operation: (existing: T, applied: T) => T;
            defaultValue: T;
        } = {
            //@ts-ignore
            operation: (a: number, b: number) => a + b,
            //@ts-ignore
            defaultValue: 0,
        },
    ) {
        const { defaultValue, operation } = options;
        this.#tree = Array(size + 1).fill(defaultValue);
        this.operation = operation;
        this.defaultValue = defaultValue;
    }
    update(i: number, value: T) {
        for (let p = i; p <= this.size; p += lowbit(p)) {
            this.#tree[p] = this.operation(this.#tree[p], value);
        }
    }
    query(n: number) {
        let ans = this.defaultValue;
        for (let p = n; p > 0; p -= lowbit(p)) {
            ans = this.operation(ans, this.#tree[p]);
        }
        return ans;
    }
}
export function lowbit(x: number) {
    return x & -x;
}
