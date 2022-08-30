import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

import { default as verticalOrder } from "./index.ts";

Deno.test("vertical-order-traversal-of-a-binary-tree", () => {
    const outputs = [
        [[9], [3, 15], [20], [7]],
        [[4], [2], [1, 5, 6], [3], [7]],
        [[4], [2], [1, 5, 6], [3], [7]],
    ];
    const inputs = [
        {
            val: 3,
            left: { val: 9, left: null, right: null },
            right: {
                val: 20,
                left: { val: 15, left: null, right: null },
                right: { val: 7, left: null, right: null },
            },
        },
        {
            val: 1,
            left: {
                val: 2,
                left: { val: 4, left: null, right: null },
                right: { val: 5, left: null, right: null },
            },
            right: {
                val: 3,
                left: { val: 6, left: null, right: null },
                right: { val: 7, left: null, right: null },
            },
        },
        {
            val: 1,
            left: {
                val: 2,
                left: { val: 4, left: null, right: null },
                right: { val: 6, left: null, right: null },
            },
            right: {
                val: 3,
                left: { val: 5, left: null, right: null },
                right: { val: 7, left: null, right: null },
            },
        },
    ];
    assertEquals(
        inputs.map((input) => verticalOrder(input)),
        outputs,
    );
});
