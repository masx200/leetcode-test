import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default str2tree;
function str2tree(s: string): TreeNode | null {
    if (s.length == 0) return null;
    return deserialize(
        (
            "[" +
            s
                .replaceAll(")(", "],[")
                .replaceAll(")", "],")
                .replaceAll("(", ",[")
                .replaceAll(",]", "]") +
            "]"
        ).replaceAll(",]", "]"),
    );
}
function reviver(value: any): any {
    return Array.isArray(value)
        ? {
            val: value[0],
            left: reviver(value[1]) ?? null,
            right: reviver(value[2]) ?? null,
        }
        : value;
}
function deserialize(data: string): any {
    return JSON.parse(data, (_key, value) => reviver(value));
}
