import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

function numMatchingSubseq(s: string, words: string[]): number {
    const cnt = counter(words);
    const arr = Array(26)
        .fill(0)
        .map(() => new Set<[string, number]>());

    for (const [w, count] of cnt) {
        arr[w.charCodeAt(0) - "a".charCodeAt(0)].add([w, count]);
    }
    let res = 0;
    for (const c of s) {
        const temp = arr[c.charCodeAt(0) - "a".charCodeAt(0)];
        for (const wordcount of temp) {
            const [word, count1] = wordcount;
            if (word.length === 1) {
                res += count1;
                temp.delete(wordcount);
            } else {
                const w1 = word.slice(1);
                if (w1.charCodeAt(0) === word.charCodeAt(0)) {
                    wordcount[0] = word.slice(1);
                } else {
                    temp.delete(wordcount);
                    arr[w1.charCodeAt(0) - "a".charCodeAt(0)].add([w1, count1]);
                }
            }
        }
    }

    return res;
}
export default numMatchingSubseq;
