import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export function PrefixTreeInsert<T extends PrefixTree>(
    root: T,
    word: string,
    {
        end,
        each,
        create = () => PrefixTree() as T,
    }: {
        each?: (node: T) => void;
        create?: () => T;
        end?: (node: T) => void;
    } = {},
): void {
    if (word.length === 0) return;
    each?.(root);
    let node = root;
    for (const ch of word) {
        const next: T = (node.children.get(ch) ??
            (() => {
                const next = create();
                node.children.set(ch, next);
                return next;
            })()) as T;
        each?.(next);
        node = next;
    }
    node.isEnd = true;
    end?.(node);
}
