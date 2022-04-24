export default WordsFrequency;
interface WordsFrequency {
    get(word: string): number;
}
function WordsFrequency(book: string[]): WordsFrequency {
    const storage = new Map<string, number>();
    for (const word of book) {
        storage.set(word, 1 + (storage.get(word) ?? 0));
    }
    function get(word: string): number {
        return storage.get(word) ?? 0;
    }
    return { get };
}
