export class HashMap<K, V> extends Map<K, V> {
    get size() {
        return this.#keys.size;
    }
    #values = new Map<string | number, V>();
    #keys = new Map<string | number, K>();
    #hash: (key: K) => string | number;
    clear(): void {
        super.clear();
        this.#keys.clear();
        this.#values.clear();
    }
    constructor(
        entries?: Iterable<[K, V]>,
        hash: (key: K) => string | number = JSON.stringify,
    ) {
        super();
        this.#hash = hash;

        if (entries) {
            for (const [k, v] of entries) {
                this.set(k, v);
            }
        }
    }
    has(key: K): boolean {
        return this.#values.has(this.#hash(key));
    }

    get(key: K): V | undefined {
        return this.#values.get(this.#hash(key));
    }
    set(key: K, value: V): this {
        const k = this.#hash(key);
        this.#values.set(k, value);
        this.#keys.set(k, key);
        return this;
    }

    delete(key: K): boolean {
        const k = this.#hash(key);
        if (this.#values.has(k)) {
            this.#keys.delete(k);
            this.#values.delete(k);
            return true;
        }
        return false;
    }
    forEach(
        callbackfn: (
            value: V,
            key: K,
            map: Map<K, V>,
        ) => void,
        thisArg?: any,
    ): void {
        this.#values.forEach((v, k) => {
            const key = this.#keys.get(k) as K;
            callbackfn.call(thisArg, v, key, this);
        }, thisArg);
    }
    values(): IterableIterator<V> {
        return this.#values.values();
    }
    keys(): IterableIterator<K> {
        return this.#keys.values();
    }
    *entries(): IterableIterator<[K, V]> {
        for (const [k, key] of this.#keys.entries()) {
            yield [key, this.#values.get(k) as V];
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
