import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { level } from "../binary-tree-level-order-traversal-ii/level.ts";
import { ArrayToListNode } from "../mod.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";

function listOfDepth(tree: TreeNode | null): Array<ListNode | null> {
    if (!tree) return [];
    const result: Array<ListNode | null> = [];

    const queue: Array<TreeNode> = [tree];

    level(queue, (array) => {
        result.push(ArrayToListNode(array));
    });
    return result;
}
export default listOfDepth;
