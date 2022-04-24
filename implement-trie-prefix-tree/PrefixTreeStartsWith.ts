import { PrefixTree } from "./PrefixTree.ts";
import { PrefixTreeSearchPrefix } from "./PrefixTreeSearchPrefix.ts";

export function PrefixTreeStartsWith(root: PrefixTree, prefix: string) {
    return !!PrefixTreeSearchPrefix(root, prefix);
}
