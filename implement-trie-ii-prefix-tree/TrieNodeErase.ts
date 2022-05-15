import { TrieNode } from "./TrieNode.ts";

export function TrieNodeErase(root: TrieNode, word: string) {
    if (word.length === 0) return;
    let node = root;
    for (const ch of word) {
        const parent = node;
        const next = node.children.get(ch);
        if (!next) return;
        node = next;
        node.prefixCount--;
        if (node.prefixCount === 0) {
            parent.children.delete(ch);
            return;
        }
    }
    node.wordCount--;
}
