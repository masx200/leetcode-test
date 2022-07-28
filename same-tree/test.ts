import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { assert } from "../deps.ts";
import isSameTree from "./index.ts";

Deno.test("same-tree", () => {
    const p = new TreeNode(1);
    const q = new TreeNode(1);
    assert(isSameTree(p, q));
    assert(isSameTree(null, null));
    assert(!isSameTree(null, p));
    assert(!isSameTree(p, null));
    assert(isSameTree(p, p));
    assert(
        !isSameTree(
            {
                val: 1,
                left: { val: 2, left: null, right: null },
                right: { val: 1, left: null, right: null },
            },
            {
                val: 1,
                left: { val: 1, left: null, right: null },
                right: { val: 2, left: null, right: null },
            }
        )
    );
    assert(
        !isSameTree(
            { val: 1, left: { val: 2, left: null, right: null }, right: null },
            { val: 1, left: null, right: { val: 2, left: null, right: null } }
        )
    );
    assert(
        isSameTree(
            {
                val: 1,
                left: { val: 2, left: null, right: null },
                right: { val: 3, left: null, right: null },
            },
            {
                val: 1,
                left: { val: 2, left: null, right: null },
                right: { val: 3, left: null, right: null },
            }
        )
    );
});
