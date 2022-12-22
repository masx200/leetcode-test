export default class WordDistance {
    #length: number;
    #pos: Map<string, number[]>;
    constructor(words: string[]) {
        const pos = new Map<string, number[]>();

        for (const [i, word] of words.entries()) {
            const arr = pos.get(word) ?? [];
            arr.push(i);
            pos.set(word, arr);
        }
        this.#length = words.length;

        this.#pos = pos;
    }

    shortest(word1: string, word2: string): number {
        let res = this.#length - 1;

        let i = 0,
            j = 0;
        const pos = this.#pos;
        const pos1 = this.#pos.get(word1) ?? [];

        const pos2 = pos.get(word2) ?? [];
        while (i < pos1.length && j < pos2.length) {
            if (pos1[i] < pos2[j]) {
                res = Math.min(res, pos2[j] - pos1[i]);
                i++;
            } else if (pos1[i] > pos2[j]) {
                res = Math.min(res, -pos2[j] + pos1[i]);
                j++;
            } else return 0;
        }
        return res;
    }
}
