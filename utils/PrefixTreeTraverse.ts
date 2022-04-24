import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
//小心调用栈溢出
// export function PrefixTreeTraverse(root: PrefixTree): Array<string> {
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
export function PrefixTreeTraverse(root: PrefixTree): Array<string> {
    if (root.children.size === 0) {
        return [];
    }
    const res: Array<string> = [];
    let prefix_and_entries: {
        prefix: string;
        key: string;
        child: PrefixTree;
    }[] = [...root.children.entries()].map((e) => ({
        prefix: "",
        key: e[0],
        child: e[1],
    }));
    while (prefix_and_entries.length > 0) {
        // console.log(prefix_and_entries);
        // prompt("pause");
        const temp: typeof prefix_and_entries = [];
        for (const entry of prefix_and_entries) {
            const { prefix, key, child } = entry;
            if (child.isEnd) {
                res.push(prefix + key);
            }
            temp.push(
                ...[...child.children.entries()].map((e) => ({
                    prefix: prefix + key,
                    key: e[0],
                    child: e[1],
                })),
            );
        }
        prefix_and_entries = temp;
    }
    return res;
}
//尾递归
// export function PrefixTreeTraverse(root: PrefixTree): Array<string> {
//     const r: Array<string> = [];
//     let result = traverse(root, "", (s) => r.push(s))?.flat(Infinity);
//     while (Array.isArray(result)) {
//         if (result.length === 0) {
//             break;
//         }
//         // console.log(result);
//         // prompt('pause')
//         const temp = result
//             .flat(Infinity)
//             .map(function (f) {
//                 const res = f();
//                 // console.log(res);
//                 // prompt("pause");
//                 return res;
//             })
//             .flat(Infinity)
//             .filter(
//                 (f) => typeof f === "function",
//             ) as unknown as (() => void)[];
//         // console.log(temp);
//         result = temp;
//     }
//     return r;
// }

// function traverse(
//     root: PrefixTree,
//     prefix: string,
//     output: (s: string) => void,
// ): void | (() => void)[] {
//     // console.log(root, prefix, output);
//     if (root.children.size === 0) {
//         return;
//     }
//     return [...root.children]
//         .map(([key, child]) => {
//             if (child.isEnd) {
//                 output(prefix + key);
//             }
//             return () => traverse(child, prefix + key, output);
//         })
//         .flat(Infinity)
//         .filter((f) => typeof f === "function") as unknown as (() => void)[];
// }
