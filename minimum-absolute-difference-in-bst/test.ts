import { assertEquals } from "asserts";

import getMinimumDifference from "./index.ts";

Deno.test("minimum-absolute-difference-in-bst", () => {
    const trees = [
        {
            val: 4,
            left: {
                val: 2,
                left: { val: 1, left: null, right: null },
                right: { val: 3, left: null, right: null },
            },
            right: { val: 6, left: null, right: null },
        },
        {
            val: 1,
            left: { val: 0, left: null, right: null },
            right: {
                val: 48,
                left: { val: 12, left: null, right: null },
                right: { val: 49, left: null, right: null },
            },
        },
    ];
    assertEquals(trees.map(getMinimumDifference), [1, 1]);
});
