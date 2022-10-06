import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import convertBST from "./index.ts";

Deno.test("convert-bst-to-greater-tree", () => {
    const inputs = [
        {
            val: 4,
            left: {
                val: 1,
                left: { val: 0, left: null, right: null },
                right: {
                    val: 2,
                    left: null,
                    right: { val: 3, left: null, right: null },
                },
            },
            right: {
                val: 6,
                left: { val: 5, left: null, right: null },
                right: {
                    val: 7,
                    left: null,
                    right: { val: 8, left: null, right: null },
                },
            },
        },
        { val: 0, left: null, right: { val: 1, left: null, right: null } },
    ];
    const outputs = [
        {
            val: 30,
            left: {
                val: 36,
                left: { val: 36, left: null, right: null },
                right: {
                    val: 35,
                    left: null,
                    right: { val: 33, left: null, right: null },
                },
            },
            right: {
                val: 21,
                left: { val: 26, left: null, right: null },
                right: {
                    val: 15,
                    left: null,
                    right: { val: 8, left: null, right: null },
                },
            },
        },
        { val: 1, left: null, right: { val: 1, left: null, right: null } },
    ];
    assertEquals(inputs.map((input) => convertBST(input)), outputs);
});
