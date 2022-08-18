class WordFilter {
    #d = new Map<string, number>();

    constructor(words: string[]) {
        const m = new Map<string, number>();
        for (const [k, word] of words.entries()) {
            m.set(word, k);
        }

        const entries = Array.from(m.entries()).sort((a, b) => a[1] - b[1]);
        for (const [word, k] of entries) {
            for (let i = 1; i <= word.length; i++) {
                for (let j = 1; j <= word.length; j++) {
                    const pref = word.substring(0, i);
                    const suff = word.substring(word.length - j);

                    this.#d.set(hash(pref, suff), k);
                }
            }
        }
    }

    f(pref: string, suff: string): number {
        return this.#d.get(hash(pref, suff)) ?? -1;
    }
}

function hash(pref: string, suff: string) {
    return pref + "," + suff;
}
export default WordFilter;
