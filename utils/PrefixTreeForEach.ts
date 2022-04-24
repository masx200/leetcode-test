import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeTraverse } from "./PrefixTreeTraverse.ts";

export function PrefixTreeForEach(
    root: PrefixTree,
    cb: (word: string) => void,
) {
    PrefixTreeTraverse(root).forEach((v) => cb(v));
}
