import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeSearchEach } from "./PrefixTreeSearchEach.ts";

// import { TrieEach } from "./TrieEach.ts";

export default function longestWord(words: string[]): string {
    const root: PrefixTree = PrefixTree();
    // const trie = TrieEach();
    for (const word of words) {
        // trie.insert(word);
        PrefixTreeInsert(root, word);
    }
    let longest = "";
    for (const word of words) {
        if (PrefixTreeSearchEach(root, word)) {
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
