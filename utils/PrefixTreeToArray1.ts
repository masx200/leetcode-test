import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";

//小心调用栈溢出
// export function PrefixTreeToArray(root: PrefixTree): Array<string> {
//     const r: Array<string> = [];
//     traverse(root, (s) => r.push(s));
//     return r;
// }
// function traverse(root: PrefixTree, output: (s: string) => void) {
//     root.children.forEach(function (child, key) {
//         // console.log(key);
//         if (child.isEnd) {
//             output(key);
//         }
//         return traverse(child, (s: string) => output(key + s));
//     });
// }
//循环
export function PrefixTreeToArray1(root: PrefixTree): Array<string> {
    if (root.children.size === 0) {
        return [];
    }
    const res: Array<string> = [];
    let prefix_and_entries: {
        prefix: string;
        key: string;
        child: PrefixTree;
    }[] = [...root.children].map((e) => ({
        prefix: "",
        key: e[0],
        child: e[1],
    }));
    while (prefix_and_entries.length > 0) {
        const temp: typeof prefix_and_entries = [];
        for (const entry of prefix_and_entries) {
            const { prefix, key, child } = entry;
            if (child.isEnd) {
                res.push(prefix + key);
            }
            for (const e of child.children) {
                temp.push({
                    prefix: prefix + key,
                    key: e[0],
                    child: e[1],
                });
            }
        }
        prefix_and_entries = temp;
    }
    return res;
}
