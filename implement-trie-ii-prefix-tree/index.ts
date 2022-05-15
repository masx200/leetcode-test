import { TrieNode } from "./TrieNode.ts";
import { TrieNodeCountWordsEqualTo } from "./TrieNodeCountWordsEqualTo.ts";
import { TrieNodeCountWordsStartingWith } from "./TrieNodeCountWordsStartingWith.ts";
import { TrieNodeErase } from "./TrieNodeErase.ts";
import { TrieNodeInsert } from "./TrieNodeInsert.ts";

export default class Trie {
    insert(word: string): void {
        TrieNodeInsert(this.#root, word);
    }
    countWordsEqualTo(word: string): number {
        return TrieNodeCountWordsEqualTo(this.#root, word);
    }
    countWordsStartingWith(prefix: string): number {
        return TrieNodeCountWordsStartingWith(this.#root, prefix);
    }
    erase(word: string): void {
        TrieNodeErase(this.#root, word);
    }
    readonly #root = new TrieNode();
}
