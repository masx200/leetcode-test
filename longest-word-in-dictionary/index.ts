import { TrieEach } from "./TrieEach.ts";

export default function longestWord(words: string[]): string {
    const trie = TrieEach();
    for (const word of words) {
        trie.insert(word);
    }
    let longest = "";
    for (const word of words) {
        if (trie.search(word, true)) {
            if (
                word.length > longest.length ||
                (word.length === longest.length && word < longest)
            ) {
                longest = word;
            }
        }
    }
    return longest;
}
