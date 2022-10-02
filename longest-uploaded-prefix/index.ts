class LUPrefix {
    #n: number;
    #ptr = 1;
    #uploaded: Set<number> = new Set();
    constructor(n: number) {
        this.#n = n;
    }

    upload(video: number): void {
        this.#uploaded.add(video);

        while (this.#ptr <= this.#n && this.#uploaded.has(this.#ptr)) {
            ++this.#ptr;
        }
    }

    longest(): number {
        return this.#ptr - 1;
    }
}
export default LUPrefix;
