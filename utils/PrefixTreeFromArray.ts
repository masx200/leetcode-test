import {
    PrefixTreeInsert,
} from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export function PrefixTreeFromArray(values: string[]): PrefixTree {
    const trie = PrefixTree();
    values.forEach((value) => PrefixTreeInsert(trie, value));
    return trie;
}
