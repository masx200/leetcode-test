function countPrefixes(words: string[], s: string): number {
    return words.reduce((a, v) => a + Number(s.startsWith(v)), 0);
}
export default countPrefixes;
