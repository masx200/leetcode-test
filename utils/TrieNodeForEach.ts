import { TrieNode } from "../implement-trie-ii-prefix-tree/TrieNode.ts";

export function TrieNodeForEach(
    root: TrieNode,
    cb: (word: string) => void,
): void {
    if (root.children.size === 0) {
        return;
    }

    let result = traverse([{ root, prefix: "" }], (s) => cb(s));
    while (typeof result == "function") {
        result = result();
    }
    return;
}
function traverse(
    roots_and_prefixes: { root: TrieNode; prefix: string }[],
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
                for (let i = 0; i < child.wordCount; i++) {
                    output(prefix + key);
                }
                rap.push({ root: child, prefix: prefix + key });
            }
        }

        return traverse(rap, output);
    };
}
