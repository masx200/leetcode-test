import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";

import { TreeNode } from "../mod.ts";
import evaluateBooleanBinaryTree from "./index.ts";
import { Values } from "./Values.ts";

Deno.test("evaluateBooleanBinaryTree", () => {
    assertEquals(false, evaluateBooleanBinaryTree(new TreeNode(Values.False)));
    assertEquals(true, evaluateBooleanBinaryTree(new TreeNode(Values.True)));
    assertEquals(
        true,
        evaluateBooleanBinaryTree({
            val: 2,
            left: { val: 1, left: null, right: null },
            right: {
                val: 3,
                left: { val: 0, left: null, right: null },
                right: { val: 1, left: null, right: null },
            },
        }),
    );
});
