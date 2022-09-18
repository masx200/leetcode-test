import { TrieNode } from "./TrieNode.ts";

export function TrieNodeInsert(root: TrieNode, word: string): void {
    if (word.length === 0) return;
    let node = root;
    for (const ch of word) {
        const next = node.children.get(ch) ?? new TrieNode();

        node.children.set(ch, next);
        node = next;
        node.prefixCount++;
    }
    node.wordCount++;
}
