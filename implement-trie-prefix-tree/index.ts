import {
    PrefixTreeInsert,
} from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "./PrefixTree.ts";
import { PrefixTreeSearch } from "./PrefixTreeSearch.ts";
import { PrefixTreeStartsWith } from "./PrefixTreeStartsWith.ts";

interface Trie {
    insert(word: string): void;

    search(word: string): boolean;

    startsWith(prefix: string): boolean;
}
export default Trie;
function Trie(): Trie {
    const root: PrefixTree = PrefixTree();
    function insert(word: string): void {
        PrefixTreeInsert(root, word);
    }
    function search(word: string) {
        return PrefixTreeSearch(root, word);
    }
    function startsWith(prefix: string) {
        return PrefixTreeStartsWith(root, prefix);
    }
    return { insert, search, startsWith };
}
