import { TrieNode } from "../implement-trie-ii-prefix-tree/TrieNode.ts";
import { PrefixTree } from "./PrefixTree.ts";

export function PrefixTreeSearchPrefix<T extends PrefixTree | TrieNode>(
    root: T,
    prefix: string,
    {
        stop,
        end,
        each,
    }: {
        stop?: (node: T) => boolean;
        each?: (node: T) => void;

        end?: (node: T) => void;
    } = {},
): T | undefined {
    let node = root;

    each?.(root);
    if (stop?.(root)) return root;
    for (const ch of prefix) {
        const next: T = node.children.get(ch) as T;
        if (!next) {
            return;
        }

        each?.(next);
        if (stop?.(next)) return next;
        node = next;
    }
    end?.(node);
    return node;
}
