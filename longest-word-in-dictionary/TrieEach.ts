import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export interface TrieEach {
    insert(word: string): void;

    search(word: string, each?: boolean): boolean;

    startsWith(prefix: string, each?: boolean): boolean;
}
// type PrefixTree = {
//     children: Map<string, PrefixTree>;
//     isEnd: boolean;
// };
// function PrefixTree(): PrefixTree {
//     return { children: new Map(), isEnd: false };
// }
export function TrieEach(): TrieEach {
    const root: PrefixTree = PrefixTree();
    function insert(word: string): void {
        PrefixTreeInsert(root, word);
        // if (word.length === 0) {
        //     return;
        // }
        // let node = root;
        // for (const ch of word) {
        //     const next = node.children.get(ch) ??
        //         (() => {
        //             const next = PrefixTree();
        //             node.children.set(ch, next);
        //             return next;
        //         })();

        //     node = next;
        // }
        // node.isEnd = true;
    }
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
    function startsWith(prefix: string, each = false) {
        return !!searchPrefix(prefix, each);
    }
    return { insert, search, startsWith };
}
