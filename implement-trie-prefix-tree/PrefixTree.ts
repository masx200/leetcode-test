export type PrefixTree = {
    children: Map<string, PrefixTree>;
    isEnd: boolean;
};
export function PrefixTree(): PrefixTree {
    return { children: new Map(), isEnd: false };
}
