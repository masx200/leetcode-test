import { TrieNode } from "./TrieNode.ts";

export function TrieNodeInsert(root: TrieNode, word: string): void {
    if (word.length === 0) return;
    let node = root;
    for (const ch of word) {
        const next = node.children.get(ch) ??
            (() => {
                const next = new TrieNode();
                node.children.set(ch, next);
                return next;
            })();

        node = next;
        node.prefixCount++;
    }
    node.wordCount++;
}
