import { PrefixTreeSearchPrefix } from "../implement-trie-prefix-tree/PrefixTreeSearchPrefix.ts";
import { TrieNode } from "./TrieNode.ts";

export function TrieNodeCountWordsStartingWith(
    root: TrieNode,
    prefix: string,
): number {
    if (prefix.length === 0) return 0;

    const node = PrefixTreeSearchPrefix(root, prefix);
    // let node = root;
    // for (const ch of prefix) {
    //     const next = node.children.get(ch);
    //     if (!next) return 0;
    //     node = next;
    // }
    return node?.prefixCount || 0;
}
