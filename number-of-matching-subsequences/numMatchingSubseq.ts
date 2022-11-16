import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

export default function numMatchingSubseq(s: string, words: string[]): number {
    const cnt = counter(words);
    let res = 0;
    for (const [w, count] of cnt) {
        if (isSubsequence(w, s)) res += count;
    }
    return res;
}

function isSubsequence(w: string, s: string) {
    let index = -1;

    for (const c of w) {
        index = s.indexOf(c, index + 1);
        if (index < 0) return false;
    }

    return true;
}
