import { assertEquals } from "../deps.ts";
import listOfDepth from "./index.ts";
import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";

Deno.test("list-of-depth-lcci", () => {
    assertEquals(listOfDepth(null), []);
    assertEquals(
        listOfDepth(
            new TreeNode(
                1,
                new TreeNode(
                    2,
                    new TreeNode(4, new TreeNode(8)),
                    new TreeNode(5),
                ),
                new TreeNode(3, null, new TreeNode(7)),
            ),
        ),
        [[1], [2, 3], [4, 5, 7], [8]].map(ArrayToListNode),
    );
});
