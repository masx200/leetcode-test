import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export function serialize(root: TreeNode | null): string {
    if (!root) {
        return "null";
    }

    return JSON.stringify(TreeNodeToArray(root)).replaceAll("null", "");
}
type TreeNodeArray =
    | null
    | [number, TreeNodeArray, TreeNodeArray]
    | number
    | [number, TreeNodeArray];
function TreeNodeToArray(root: TreeNode | null): TreeNodeArray {
    if (!root) return null;
    if (!root.left && !root.right) {
        return root.val;
    }
    if (root.left && !root.right) {
        return [root.val, TreeNodeToArray(root.left)];
    }
    return [root.val, TreeNodeToArray(root.left), TreeNodeToArray(root.right)];
}
function ArrayToTreeNode(array: TreeNodeArray): TreeNode | null {
    // console.log('array',array)
    if (array === null) return null;
    if (Array.isArray(array) && array.length === 3) {
        return new TreeNode(
            array[0],
            ArrayToTreeNode(array[1]),
            ArrayToTreeNode(array[2])
        );
    }
    if (Array.isArray(array) && array.length === 2) {
        return new TreeNode(array[0], ArrayToTreeNode(array[1]));
    }
    if (typeof array === "number") {
        return new TreeNode(array);
    }
    throw new Error("not array length 3 or 2:" + array);
}
export function deserialize(data: string): TreeNode | null {
    if (data === "null") {
        return null;
    }
    const array = JSON.parse(
        data.replaceAll(",,", ",null,")
        // .replaceAll(",]", ",null]"),
    );
    return ArrayToTreeNode(array);
}
