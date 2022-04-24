import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

interface WordDictionary {
    addWord(word: string): void;
    search(word: string): boolean;
}
export default WordDictionary;
function WordDictionary(): WordDictionary {
    const root: PrefixTree = PrefixTree();
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
    function search(word: string): boolean {
        return match(word, 0, root);
    }
    function match(word: string, index: number, root: PrefixTree): boolean {
        if (index === word.length) return root.isEnd;

        if (word[index] !== ".") {
            const child = root.children.get(word[index]);
            if (!child) return false;
            return match(word, index + 1, child);
        } else {
            for (const child of root.children.values()) {
                if (match(word, index + 1, child)) return true;
            }
        }
        return false;
    }
    return { addWord: insert, search };
}
// type PrefixTree = {
//     children: Map<string, PrefixTree>;
//     isEnd: boolean;
// };
// function PrefixTree(): PrefixTree {
//     return { children: new Map(), isEnd: false };
// }
// var obj = WordDictionary();
// ["bad", "dad", "mad", "pad", 'bbbbbbbbbbb'].forEach(word => {
//     obj.addWord(word)
// })
