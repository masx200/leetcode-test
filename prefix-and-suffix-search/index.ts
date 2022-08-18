class WordFilter {
    #d = new Map<string, number>();

    constructor(words: string[]) {
        for (const [k, word] of words.entries()) {
            // this.#d.set(hash(word, word), k);
            for (let i = 1; i <= word.length; i++) {
                for (let j = 1; j <= word.length; j++) {
                    const pref = word.substring(0, i);
                    const suff = word.substring(word.length - j);
                    //  console.log(pref,suff,word,k)
                    this.#d.set(hash(pref, suff), k);
                }
            }
        }
        // console.log(this.#d);
    }

    f(pref: string, suff: string): number {
        return this.#d.get(hash(pref, suff)) ?? -1;
    }
}

function hash(pref: string, suff: string) {
    return pref + "," + suff;
}
export default WordFilter;
