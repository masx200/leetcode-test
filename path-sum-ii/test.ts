import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";

import { TreeNode } from "../mod.ts";
import pathSum from "./index.ts";

Deno.test("path-sum-ii", () => {
    const inputs: Array<[root: TreeNode | null, target: number]> = [
        [
            {
                val: 5,
                left: {
                    val: 4,
                    left: {
                        val: 11,
                        left: { val: 7, left: null, right: null },
                        right: { val: 2, left: null, right: null },
                    },
                    right: null,
                },
                right: {
                    val: 8,
                    left: { val: 13, left: null, right: null },
                    right: {
                        val: 4,
                        left: { val: 5, left: null, right: null },
                        right: { val: 1, left: null, right: null },
                    },
                },
            },
            22,
        ],
        [null, 1],
        [null, 0],
        [
            {
                val: 5,
                left: {
                    val: 4,
                    left: {
                        val: 11,
                        left: { val: 7, left: null, right: null },
                        right: { val: 2, left: null, right: null },
                    },
                    right: null,
                },
                right: {
                    val: 8,
                    left: { val: 13, left: null, right: null },
                    right: {
                        val: 4,
                        left: { val: 5, left: null, right: null },
                        right: { val: 1, left: null, right: null },
                    },
                },
            },

            22,
        ],
        [
            {
                val: 1,
                left: { val: 2, left: null, right: null },
                right: { val: 3, left: null, right: null },
            },

            5,
        ],
        [{ val: 1, left: { val: 2, left: null, right: null }, right: null }, 0],
    ];
    const outputs = [
        [
            [5, 4, 11, 2],
            [5, 8, 4, 5],
        ],
        [],
        [],
        [
            [5, 4, 11, 2],
            [5, 8, 4, 5],
        ],
        [],
        [],
    ];
    assertEquals(
        outputs,
        inputs.map(([root, target]) => pathSum(root, target)),
    );
});
