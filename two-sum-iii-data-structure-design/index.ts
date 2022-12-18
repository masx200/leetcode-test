export default class TwoSum {
    #m = new Map<number, number>();

    add(n: number) {
        this.#m.set(n, (this.#m.get(n) ?? 0) + 1);
    }
    find(n: number) {
        for (const [a, cnt] of this.#m) {
            const b = n - a;
            if (a > b) return false;
            if (a === b) return cnt > 1;

            if (this.#m.has(b)) return true;
        }
        return false;
    }
}
