import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export function PrefixTreeSearchPrefixEach(
    root: PrefixTree,
    prefix: string,
    // each = false,
): PrefixTree | undefined {
    const each = true;
    let node = root;
    for (const ch of prefix) {
        const next = node.children.get(ch);
        if (!next) {
            return;
        }

        node = next;
        if (each && !node.isEnd) {
            return;
        }
    }
    return node;
}
