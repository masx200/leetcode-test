import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export function PrefixTreeInsert(root: PrefixTree, word: string): void {
    function insert(word: string) {
        if (word.length === 0) return;
        let node = root;
        for (const ch of word) {
            const next = node.children.get(ch) ??
                (() => {
                    const next = PrefixTree();
                    node.children.set(ch, next);
                    return next;
                })();

            node = next;
        }
        node.isEnd = true;
        // console.log(JSON.stringify(root, (k, v) => {
        //     if (v instanceof Map) {
        //         return Object.fromEntries(v)
        //     }
        //     return v
        // }))
    }
    return insert(word);
}
