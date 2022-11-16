import isSubsequence from "../is-subsequence/index.ts";
import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

export default function numMatchingSubseq(s: string, words: string[]): number {
    const cnt = counter(words);
    let res = 0;
    for (const [w, count] of cnt) {
        if (w.length > s.length) continue;
        if (isSubsequence(w, s)) res += count;
    }
    return res;
}
