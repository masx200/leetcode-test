import { assertEquals } from "../deps.ts";
import { TreeNode } from "../mod.ts";
import increasingBST from "./index.ts";

Deno.test("binode-lcci-1", () => {
    assertEquals(
        increasingBST(new TreeNode(5, new TreeNode(1), new TreeNode(7))),
        new TreeNode(1, null, new TreeNode(5, null, new TreeNode(7)))
    );
});
Deno.test("binode-lcci-2", () => {
    assertEquals(
        increasingBST(
            new TreeNode(
                4,
                new TreeNode(
                    2,
                    new TreeNode(1, new TreeNode(0)),
                    new TreeNode(3)
                ),
                new TreeNode(5, null, new TreeNode(6))
            )
        ),
        new TreeNode(
            0,
            null,
            new TreeNode(
                1,
                null,
                new TreeNode(
                    2,
                    null,
                    new TreeNode(
                        3,
                        null,
                        new TreeNode(
                            4,
                            null,
                            new TreeNode(5, null, new TreeNode(6))
                        )
                    )
                )
            )
        )
    );
});
Deno.test("binode-lcci-3", () => {
    assertEquals(
        JSON.stringify(
            increasingBST({
                val: 5,
                left: {
                    val: 3,
                    left: {
                        val: 2,
                        left: { val: 1, left: null, right: null },
                        right: null,
                    },
                    right: { val: 4, left: null, right: null },
                },
                right: {
                    val: 6,
                    left: null,
                    right: {
                        val: 8,
                        left: { val: 7, left: null, right: null },
                        right: { val: 9, left: null, right: null },
                    },
                },
            })
        ),
        JSON.stringify({
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: {
                    val: 3,
                    left: null,
                    right: {
                        val: 4,
                        left: null,
                        right: {
                            val: 5,
                            left: null,
                            right: {
                                val: 6,
                                left: null,
                                right: {
                                    val: 7,
                                    left: null,
                                    right: {
                                        val: 8,
                                        left: null,
                                        right: {
                                            val: 9,
                                            left: null,
                                            right: null,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        })
    );
});
