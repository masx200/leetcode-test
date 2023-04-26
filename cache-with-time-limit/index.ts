export default class TimeLimitedCache {
    #map: Map<number, { expires: number; value: number }>;
    constructor() {
        this.#map = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        const deadline = Date.now();
        const live = (this.#map.get(key)?.expires ?? 0) > deadline;

        this.#map.set(key, { value, expires: deadline + duration });
        return live;
    }

    get(key: number): number {
        const deadline = Date.now();
        const live = (this.#map.get(key)?.expires ?? 0) > deadline;
        return (live ? this.#map.get(key)?.value : -1) ?? -1;
    }

    count(): number {
        const deadline = Date.now();
        for (const [key, { expires }] of this.#map) {
            const live = expires > deadline;

            if (!live) this.#map.delete(key);
        }
        return this.#map.size;
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
