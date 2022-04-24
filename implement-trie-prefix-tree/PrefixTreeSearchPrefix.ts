import { PrefixTree } from "./PrefixTree.ts";

export function PrefixTreeSearchPrefix(
    root: PrefixTree,
    prefix: string,
): PrefixTree | undefined {
    function searchPrefix(prefix: string): PrefixTree | undefined {
        let node = root;
        for (const ch of prefix) {
            const next = node.children.get(ch);
            if (!next) {
                return;
            }

            node = next;
        }
        return node;
    }
    return searchPrefix(prefix);
}
