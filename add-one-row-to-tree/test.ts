import { assertEquals } from "../deps.ts";
import { TreeNode } from "../mod.ts";
import addOneRow from "./index.ts";

Deno.test("add-one-row-to-tree", () => {
    const outputs = [
        {
            val: 4,
            left: {
                val: 1,
                left: {
                    val: 2,
                    left: { val: 3, left: null, right: null },
                    right: { val: 1, left: null, right: null },
                },
                right: null,
            },
            right: {
                val: 1,
                left: null,
                right: {
                    val: 6,
                    left: { val: 5, left: null, right: null },
                    right: null,
                },
            },
        },
        {
            val: 4,
            left: {
                val: 2,
                left: {
                    val: 1,
                    left: { val: 3, left: null, right: null },
                    right: null,
                },
                right: {
                    val: 1,
                    left: null,
                    right: { val: 1, left: null, right: null },
                },
            },
            right: null,
        },
    ];
    const inputs = [
        [
            {
                val: 4,
                left: {
                    val: 2,
                    left: { val: 3, left: null, right: null },
                    right: { val: 1, left: null, right: null },
                },
                right: {
                    val: 6,
                    left: { val: 5, left: null, right: null },
                    right: null,
                },
            },
            1,
            2,
        ],
        [
            {
                val: 4,
                left: {
                    val: 2,
                    left: { val: 3, left: null, right: null },
                    right: { val: 1, left: null, right: null },
                },
                right: null,
            },
            1,
            3,
        ],
    ] as Array<[root: TreeNode | null, val: number, depth: number]>;
    assertEquals(
        outputs,
        inputs.map((args) =>
            structuredClone(Reflect.apply(addOneRow, null, args))
        ),
    );
});
