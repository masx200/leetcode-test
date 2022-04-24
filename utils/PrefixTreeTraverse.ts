import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

export function PrefixTreeTraverse(root: PrefixTree): Array<string> {
    const r: Array<string> = [];
    traverse(root, (s) => r.push(s));
    return r;
}
function traverse(root: PrefixTree, output: (s: string) => void) {
    root.children.forEach(function (child, key) {
        // console.log(key);
        if (child.isEnd) {
            output(key);
        }
        return traverse(child, (s: string) => output(key + s));
    });
}
