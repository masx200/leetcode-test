class FreqStack {
    #freq: Map<number, number>;
    #group: Map<number, number[]>;
    #maxFreq: number;
    constructor() {
        this.#freq = new Map();
        this.#group = new Map();
        this.#maxFreq = 0;
    }

    push(val: number): void {
        this.#freq.set(val, (this.#freq.get(val) || 0) + 1);
        const cnt = this.#freq.get(val) ?? 0;

        if (!this.#group.has(cnt)) {
            this.#group.set(cnt, []);
        }
        this.#group.get(cnt)?.push(val);
        this.#maxFreq = Math.max(this.#maxFreq, cnt);
    }

    pop(): number {
        const array = this.#group.get(this.#maxFreq) ?? [];

        const val = array[array.length - 1];
        this.#freq.set(val, (this.#freq.get(val) ?? 0) - 1);
        array.pop();

        if (array.length === 0) {
            this.#maxFreq--;
        }
        return val;
    }
}
export default FreqStack;
