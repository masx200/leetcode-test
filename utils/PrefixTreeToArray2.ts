import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export function PrefixTreeToArray2(root: PrefixTree): Array<string> {
    if (root.children.size === 0) {
        return [];
    }
    const r: Array<string> = [];
    let result = traverse([{ root, prefix: "" }], (s) => r.push(s));
    while (typeof result == "function") {
        result = result();
    }
    return r;
}
function traverse(
    roots_and_prefixes: { root: PrefixTree; prefix: string }[],
    output: (s: string) => void,
) {
    if (roots_and_prefixes.length === 0) {
        return;
    }
    return () => {
        const rap: typeof roots_and_prefixes = [];
        for (const { root, prefix } of roots_and_prefixes) {
            if (root.children.size === 0) {
                continue;
            }
            for (const [key, child] of root.children) {
                if (child.isEnd) {
                    output(prefix + key);
                }
                rap.push({ root: child, prefix: prefix + key });
            }
        }

        return traverse(rap, output);
    };
}
