function findSecretWord(words: string[], master: Master) {
    const seen = new Set();
    while (true) {
        const j = Math.floor(Math.random() * words.length);
        const w = words[j];
        seen.add(w);
        const d = master.guess(w);
        if (d === 6) return;
        if (d >= 0) {
            words = words.filter((v) =>
                !seen.has(v) &&
                d === Array.prototype.filter.call(
                        v,
                        (c, k) => w[k] === c,
                    ).length
            );
        } else {
            return;
        }
    }
}
export default findSecretWord;
export interface Master {
    guess(word: string): number;
}
