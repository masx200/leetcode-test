export default class OrderedStream {
    #store: Map<number, string>;
    #ptr = 1;
    #n: number;
    constructor(n: number) {
        this.#store = new Map();
        this.#n = n;
    }

    insert(idKey: number, value: string): string[] {
        if (idKey > this.#n || idKey < 1) {
            throw Error("range error");
        }
        this.#store.set(idKey, value);
        if (this.#ptr === idKey && (this.#store.has(idKey))) {
            const res: string[] = [];
            let i = this.#ptr;
            for (; this.#store.has(i); i++) {
                res.push(this.#store.get(i) || "");
            }
            this.#ptr = i;
            return res;
        }
        return [];
    }
}
