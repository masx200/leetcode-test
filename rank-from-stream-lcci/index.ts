export default class StreamRank {
    #bit = new BinaryIndexTree(50001);
    constructor() {}

    track(x: number): void {
        this.#bit.update(x + 1, 1);
    }

    getRankOfNumber(x: number): number {
        return this.#bit.query(x + 1);
    }
}
export class BinaryIndexTree {
    static lowbit(x: number) {
        return x & -x;
    }
    #tree: number[];
    constructor(public size: number) {
        this.#tree = Array(size+1).fill(0);
    }
    update(i: number, x: number) {
        for (let p = i; p <= this.size; p += BinaryIndexTree.lowbit(p)) {
            this.#tree[p] += x;
        }
    }
    query(n: number) {
        let ans = 0;
        for (let p = n; p > 0; p -= BinaryIndexTree.lowbit(p)) {
            ans += this.#tree[p];
        }
        return ans;
    }
}
