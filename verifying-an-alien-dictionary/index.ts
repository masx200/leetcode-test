export default function isAlienSorted(words: string[], order: string): boolean {
    const decode_cache = new Map<string, string>();
    function decode(word: string): string {
        const cached = decode_cache.get(word);
        if (cached) return cached;

        const result = String.fromCharCode(
            ...Array.from(word).map(
                (char) => "a".charCodeAt(0) + (char_to_index.get(char) ?? -1),
            ),
        );
        decode_cache.set(word, result);
        return result;
    }
    function checktwo(word1: string, word2: string): boolean {
        const decoded = [word1, word2].map((w) => decode(w));
        const sorted = Array.from(decoded).sort();

        return sorted[0] === decoded[0] && decoded[1] === sorted[1];
    }

    const char_to_index = new Map(
        [...Array.from(order).entries()].map(([a, b]) => [b, a]),
    );

    return words.every((word, index, array) => {
        const mext = array[index + 1];

        return mext ? checktwo(word, mext) : true;
    });
}
