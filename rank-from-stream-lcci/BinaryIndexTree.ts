export class BinaryIndexTree<T = number> {
    defaultValue: T;
    operation: (existing: T, applied: T) => T;
    static lowbit(x: number) {
        return x & -x;
    }
    #tree: T[];
    constructor(
        public size: number,
        //@ts-ignore
        operation: (existing: T, applied: T) => T = (a: number, b: number) =>
            a + b,
        defaultValue: T = 0 as unknown as T,
    ) {
        this.#tree = Array(size + 1).fill(defaultValue);
        this.operation = operation;
        this.defaultValue = defaultValue;
    }
    update(i: number, value: T) {
        for (let p = i; p <= this.size; p += BinaryIndexTree.lowbit(p)) {
            this.#tree[p] = this.operation(this.#tree[p], value);
        }
    }
    query(n: number) {
        let ans = this.defaultValue;
        for (let p = n; p > 0; p -= BinaryIndexTree.lowbit(p)) {
            ans = this.operation(ans, this.#tree[p]);
        }
        return ans;
    }
}
