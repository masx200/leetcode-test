import { lowerBound } from "./lowerBound.ts";

export default class DistanceLimitedPathsExist {
    #snaps: [number, number][][];
    #father: number[];
    #rank: number[];
    #changed: Set<number>;
    constructor(n: number, edgeList: number[][]) {
        this.#snaps = Array(n)
            .fill(0)
            .map((_, i) => [[0, i]]);
        this.#father = [...Array(n).keys()];
        this.#rank = Array(n).fill(0);
        this.#changed = new Set();
        edgeList.sort((a, b) => a[2] - b[2]);
        let curLen = 0;
        for (const e of edgeList) {
            if (e[2] > curLen) {
                for (const node of this.#changed) {
                    this.#snaps[node].push([curLen, this.#father[node]]);
                }
                this.#changed.clear();
                curLen = e[2];
            }
            this.#union(e[0], e[1]);
        }
    }
    #union(a: number, b: number) {
        let fa = this.#findFather(a);
        let fb = this.#findFather(b);

        if (fa != fb) {
            if (this.#rank[fa] >= this.#rank[fb]) {
                [fa, fb] = [fb, fa];
            }
            this.#father[fa] = fb;
            this.#rank[fb] = Math.max(this.#rank[fb], this.#rank[fa] + 1);
            this.#changed.add(fa);
        }
    }
    query(p: number, q: number, limit: number): boolean {
        return this.#findSnapRoot(p, limit) === this.#findSnapRoot(q, limit);
    }
    #findSnapRoot(node: number, limit: number): number {
        const index = lowerBound(
            0,
            this.#snaps[node].length,
            (i: number) => this.#snaps[node][i][0] - limit,
        ) - 1;
        const f = this.#snaps[node][index][1];

        if (f == node) return f;
        else return this.#findSnapRoot(f, limit);
    }
    #findFather(b: number) {
        let a = b;
        while (this.#father[a] !== a) {
            a = this.#father[a];
        }
        if (this.#father[b] != a) {
            this.#changed.add(b);
        }
        this.#father[b] = a;
        return a;
    }
}
