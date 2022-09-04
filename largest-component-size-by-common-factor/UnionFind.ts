export class UnionFind {
    #sizes: Map<number, number> = new Map();
    #parents: Map<number, number> = new Map();
    constructor() {}

    find(x: number) {
        if (x !== (this.#parents.get(x) ?? x)) {
            this.#parents.set(x, this.find(this.#parents.get(x) ?? x));
        }
        return this.#parents.get(x) ?? x;
    }

    union(a: number, b: number) {
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
