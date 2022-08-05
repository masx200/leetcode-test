function mergeAlternately(word1: string, word2: string): string {
    return Array(2 * Math.max(word1.length, word2.length))
        .fill(0)
        .map((_, i) =>
            i % 2 ? word2[Math.floor(i / 2)] : word1[Math.floor(i / 2)]
        )
        .join("");
}
export default mergeAlternately;
