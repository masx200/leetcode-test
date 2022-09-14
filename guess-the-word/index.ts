function findSecretWord(words: string[], master: Master) {
    while (true) {
        const j = Math.floor(Math.random() * words.length);
        const w = words[j];

        const d = master.guess(w);
        if (d === 6) return;
        if (d >= 0) {
            words = words.filter((v) =>
                d === Array.prototype.filter.call(
                    v,
                    (c, k) => w[k] === c,
                ).length
            );
        }
    }
}
export default findSecretWord;
export interface Master {
    guess(word: string): number;
}
