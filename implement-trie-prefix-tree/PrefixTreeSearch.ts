import { PrefixTree } from "./PrefixTree.ts";
import { PrefixTreeSearchPrefix } from "./PrefixTreeSearchPrefix.ts";

export function PrefixTreeSearch(root: PrefixTree, word: string): boolean {
    return !!PrefixTreeSearchPrefix(root, word)?.isEnd;
}
