export interface PrefixTree {
    children: Map<string, PrefixTree>;
    isEnd: boolean;
}
export function PrefixTree(
    isEnd = false,
    children = new Map<string, PrefixTree>(),
): PrefixTree {
    return { children: children, isEnd: isEnd };
}
