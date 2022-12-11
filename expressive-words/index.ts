export default function expressiveWords(s: string, words: string[]): number {
    const re = new RegExp(
        "^" +
            (s.match(/([a-z])\1*/g) ?? [])
                .map((m) => (m.length >= 3 ? m[0] + `{1,${m.length}}` : m))
                .join("") +
            "$",
    );

    return words.filter((w) => re.test(w)).length;
}
