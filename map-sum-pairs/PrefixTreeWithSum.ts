import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export interface PrefixTreeWithSum extends PrefixTree {
    sum: number;
    value: number;
}
export class PrefixTreeWithSum {
    value = 0;
    sum = 0;
    isEnd = false;
    children = new Map<string, PrefixTreeWithSum>();
}
