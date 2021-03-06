import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "./PrefixTree.ts";
import { PrefixTreeSearch } from "./PrefixTreeSearch.ts";
import { PrefixTreeStartsWith } from "./PrefixTreeStartsWith.ts";

interface Trie {
    insert(word: string): void;

    search(word: string): boolean;

    startsWith(prefix: string): boolean;
}
export default Trie;
function Trie(): Trie {
    const root: PrefixTree = PrefixTree();
    function insert(word: string): void {
        PrefixTreeInsert(root, word);
        // if (word.length === 0) return;
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
    // function searchPrefix(prefix: string): PrefixTree | undefined {
    //     let node = root;
    //     for (const ch of prefix) {
    //         const next = node.children.get(ch);
    //         if (!next) {
    //             return;
    //         }

    //         node = next;
    //     }
    //     return node;
    // }
    function search(word: string) {
        return PrefixTreeSearch(root, word);
    }
    function startsWith(prefix: string) {
        return PrefixTreeStartsWith(root, prefix);
    }
    return { insert, search, startsWith };
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
