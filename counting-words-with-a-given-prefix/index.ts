export default function prefixCount(words: string[], pref: string): number {
    return words.reduce((a, v) => a + Number(v.startsWith(pref)), 0);
}
