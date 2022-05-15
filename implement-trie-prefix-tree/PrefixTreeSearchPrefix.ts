import { TrieNode } from "../implement-trie-ii-prefix-tree/TrieNode.ts";
import { PrefixTree } from "./PrefixTree.ts";

export function PrefixTreeSearchPrefix<T extends PrefixTree | TrieNode>(
    root: T,
    prefix: string,
): T | undefined {
    // function searchPrefix(prefix: string): PrefixTree | undefined {
    let node = root;
    for (const ch of prefix) {
        const next: T = node.children.get(ch) as T;
        if (!next) {
            return;
        }

        node = next;
    }
    return node;
    // }
    // return searchPrefix(prefix);
}
