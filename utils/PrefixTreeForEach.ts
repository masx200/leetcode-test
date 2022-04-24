import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeToArray } from "./PrefixTreeToArray.ts";

export function PrefixTreeForEach(
    root: PrefixTree,
    cb: (word: string) => void,
) {
    PrefixTreeToArray(root).forEach((v) => cb(v));
}
