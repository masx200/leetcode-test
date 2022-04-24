import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export function PrefixTreeSearchEach(
    root: PrefixTree,
    word: string,
    each = false,
) {
    function searchPrefix(
        prefix: string,
        each = false,
    ): PrefixTree | undefined {
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
    function search(word: string, each = false) {
        return !!searchPrefix(word, each)?.isEnd;
    }
    return search(word, each);
}
