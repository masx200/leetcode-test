export default class TwoSum {
    #m = new Map<number, number>();

    add(n: number) {
        this.#m.set(n, (this.#m.get(n) ?? 0) + 1);
    }
    find(n: number) {
        for (const a of this.#m.keys()) {
            const b = n - a;
            if (this.#m.has(b)) {
                if (a === b && (this.#m.get(b) ?? 0) < 2) continue;
                return true;
            }
        }
        return false;
    }
}
