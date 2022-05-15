import { TrieNode } from "../implement-trie-ii-prefix-tree/TrieNode.ts";

export function TrieNodeClear(root: TrieNode) {
    root.children.clear();
    root.prefixCount = 0;
    root.wordCount = 0;
}
