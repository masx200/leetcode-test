export class UnionFind<T = number> {
    #sizes: Map<T, number> = new Map();
    #parents: Map<T, T> = new Map();
    constructor() {}

    find(x: T): T {
        if (x !== (this.#parents.get(x) ?? x)) {
            this.#parents.set(x, this.find(this.#parents.get(x) ?? x));
        }
        return this.#parents.get(x) ?? x;
    }
    connected(p: T, q: T): boolean {
        return this.find(p) == this.find(q);
    }
    union(a: T, b: T) {
        const fa = this.find(a);
        const fb = this.find(b);
        if (fa == fb) {
            return;
        }
        const sa = this.#sizes.get(fa) ?? 1;
        const sb = this.#sizes.get(fb) ?? 1;

        if (sa < sb) {
            this.#parents.set(fa, fb);
            this.#sizes.set(fb, sb + sa);
        } else {
            this.#parents.set(fb, fa);
            this.#sizes.set(fa, sb + sa);
        }
    }
}
