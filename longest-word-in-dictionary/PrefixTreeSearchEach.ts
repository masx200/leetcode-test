import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeSearchPrefixEach } from "./PrefixTreeSearchPrefixEach.ts";
export function PrefixTreeSearchEach(
    root: PrefixTree,
    word: string,
    // each = false,
) {
    // function search(word: string, each = false) {
    return !!PrefixTreeSearchPrefixEach(root, word)?.isEnd;
    // }
    // return search(word, each);
}
