import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import levelOrder from "../binary-tree-level-order-traversal/index.ts";
import { zip } from "../deps.ts";
import CBTInserter from "./index.ts";

Deno.test("complete-binary-tree-inserter-1", () => {
    const root = new TreeNode(1, new TreeNode(2));
    const cbt = new CBTInserter(root);

    assertEquals(cbt.insert(3), 1);
    assertEquals(cbt.insert(4), 2);

    assertEquals(
        cbt.get_root(),
        new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)),
    );
});
Deno.test("complete-binary-tree-inserter-2", () => {
    const root = new TreeNode(1, new TreeNode(2));
    const cbt = new CBTInserter(root);

    assertEquals(cbt.insert(3), 1);
    assertEquals(cbt.insert(4), 2);

    assertEquals(
        cbt.get_root(),
        new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)),
    );
    assertEquals(cbt.insert(13), 2);
    assertEquals(cbt.insert(14), 3);
    assertEquals(cbt.insert(213), 3);
    assertEquals(cbt.insert(124), 4);
    assertEquals(cbt.insert(313), 4);
    assertEquals(cbt.insert(134), 13);
    assertEquals(
        [1, 2, 3, 4, 13, 14, 213, 124, 313, 134],
        levelOrder(cbt.get_root()).flat(),
    );
});
Deno.test("complete-binary-tree-inserter-3", () => {
    const data = zip(
        [
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
            "insert",
        ],
        [
            [2],
            [3],
            [4],
            [5],
            [6],
            [7],
            [8],
            [9],
            [10],
            [11],
            [12],
            [13],
            [14],
            [15],
            [16],
        ],
        [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8],
    ) as [string, number[], number][];
    const root = new TreeNode(1);
    const cbt = new CBTInserter(root);
    for (const [target, args, result] of data) {
        assertEquals(
            Reflect.apply(Reflect.get(cbt, target), cbt, args),
            result,
        );
    }
    assertEquals(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        levelOrder(cbt.get_root()).flat(),
    );
});
