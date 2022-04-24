import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export function PrefixTreeClear(root: PrefixTree) {
    root.children.clear();
    root.isEnd = false;
}
