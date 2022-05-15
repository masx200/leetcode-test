import { PrefixTreeSearchPrefix } from "../implement-trie-prefix-tree/PrefixTreeSearchPrefix.ts";
import { TrieNode } from "./TrieNode.ts";

export function TrieNodeCountWordsEqualTo(
    root: TrieNode,
    word: string,
): number {
    if (word.length === 0) return 0;
    const node = PrefixTreeSearchPrefix(root, word);
    // let node = root;
    // for (const ch of word) {
    //     const next = node.children.get(ch);
    //     if (!next) return 0;
    //     node = next;
    // }
    return node?.wordCount || 0;
}
