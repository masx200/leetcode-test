import { SegmentTree } from './SegmentTree.ts';

export default class BookMyShow {
    #seats: number[];
    #ptr = 0;
    #maxSegTree: SegmentTree<number>;
    #sumSegTree: SegmentTree<number>;
    constructor(public n: number, public m: number) {
        this.#seats = Array<number>(n).fill(m);
        this.#maxSegTree = new SegmentTree<number>(
            0,
            n - 1,
            () => m,
            (a, b) => Math.max(a, b),
        );
        this.#sumSegTree = new SegmentTree<number>(
            0,
            n - 1,
            () => m,
            (a, b) => a + b,
        );
    }

    gather(k: number, maxRow: number): number[] {
        let l = 0;
        let r = maxRow;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (this.#maxSegTree.query(0, mid) >= k) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        if (this.#maxSegTree.query(0, l) < k) {
            return [];
        }
        this.#seats[l] -= k;
        this.#maxSegTree.change(l, this.#seats[l]);
        this.#sumSegTree.change(l, this.#seats[l]);
        return [l, this.m - (this.#seats[l] + k)];
    }

    scatter(k: number, maxRow: number): boolean {
        if (this.#sumSegTree.query(0, maxRow) < k) return false;
        while (k > 0) {
            const t = Math.min(k, this.#seats[this.#ptr]);
            this.#seats[this.#ptr] -= t;

            this.#maxSegTree.change(this.#ptr, this.#seats[this.#ptr]);
            this.#sumSegTree.change(this.#ptr, this.#seats[this.#ptr]);
            k -= t;
            if (this.#seats[this.#ptr] === 0) this.#ptr++;
        }
        return true;
    }
}
