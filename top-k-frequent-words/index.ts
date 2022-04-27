export default function topKFrequent(words: string[], k: number): string[] {
    words.sort();
    const storage = new Map<string, number>();
    for (const word of words) {
        storage.set(word, 1 + (storage.get(word) ?? 0));
    }
    return [...storage.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((a) => a[0]);
}
