import { counter } from "../substring-with-concatenation-of-all-words/counter.ts";

function mostCommonWord(paragraph: string, banned: string[]): string {
    const ban = new Set(banned);
    const cnt = counter(
        [...paragraph.matchAll(/\w+/g)].map((a) => a[0].toLowerCase()),
    );
    return Array.from(cnt.entries()).filter((k) => !ban.has(k[0])).reduce((
        a,
        v,
    ) => a[1] > v[1] ? a : v)[0];
}
export default mostCommonWord;
