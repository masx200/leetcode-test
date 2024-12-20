export class Poly extends Map<string[], number> {
    clear(): void {
        super.clear();
        this.#keys.clear();
        this.#values.clear();
    }
    get size() {
        return this.#keys.size;
    }
    constructor(entries?: Iterable<[string[], number]>) {
        super();
        if (entries) {
            for (const [k, v] of entries) {
                this.set(k, v);
            }
        }
    }
    has(key: string[]): boolean {
        return this.#values.has(JSON.stringify(key));
    }
    #values = new Map<string, number>();
    #keys = new Map<string, string[]>();
    get(key: string[]) {
        return this.#values.get(JSON.stringify(key));
    }
    set(key: string[], value: number) {
        const k = JSON.stringify(key);
        this.#values.set(k, value);
        this.#keys.set(k, key);
        return this;
    }
    add(that: Poly): Poly {
        const re = new Poly();
        this.forEach((v, k) => {
            re.set(k, v);
        });
        that.forEach((v, k) => {
            const count = (re.get(k) ?? 0) + v;

            if (count === 0) re.delete(k);
            else re.set(k, count);
        });
        return re;
    }
    sub(that: Poly): Poly {
        const re = new Poly();
        this.forEach((v, k) => {
            re.set(k, v);
        });
        that.forEach((v, k) => {
            const count = (re.get(k) ?? 0) - v;

            if (count === 0) re.delete(k);
            else re.set(k, count);
        });
        return re;
    }
    mul(that: Poly): Poly {
        const re = new Poly();
        this.forEach((v1, k1) => {
            that.forEach((v2, k2) => {
                const k = [...k1, ...k2].sort();
                const count = (re.get(k) ?? 0) + v1 * v2;
                if (count === 0) re.delete(k);
                else re.set(k, count);
            });
        });

        return re;
    }
    delete(key: string[]): boolean {
        const k = JSON.stringify(key);
        if (this.#values.has(k)) {
            this.#keys.delete(k);
            this.#values.delete(k);
            return true;
        }
        return false;
    }
    forEach(
        callbackfn: (
            value: number,
            key: string[],
            map: Map<string[], number>,
        ) => void,
        thisArg?: any,
    ): void {
        this.#values.forEach((v, k, _m) => {
            const key = this.#keys.get(k) ?? JSON.parse(k);
            callbackfn.call(thisArg, v, key, this);
        }, thisArg);
    }
    values(): IterableIterator<number> {
        return this.#values.values();
    }
    keys(): IterableIterator<string[]> {
        return this.#keys.values();
    }
    *entries(): IterableIterator<[string[], number]> {
        for (const [k, key] of this.#keys.entries()) {
            yield [key, this.#values.get(k) ?? 0];
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    toList(): string[] {
        return [...this.entries()]
            .sort(
                (a, b) =>
                    -a[0].length + b[0].length ||
                    a[0].join("*").localeCompare(b[0].join("*")),
            )
            .map(([k, v]) => {
                return [v, ...k].join("*");
            });
    }
}
