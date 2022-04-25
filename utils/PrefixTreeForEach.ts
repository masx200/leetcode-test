import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeToArray1 as PrefixTreeToArray } from "./PrefixTreeToArray1.ts";

export function PrefixTreeForEach(
    root: PrefixTree,
    cb: (word: string) => void,
) {
    PrefixTreeToArray(root).forEach((v) => cb(v));
}
