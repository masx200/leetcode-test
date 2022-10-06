import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import isSymmetric from "./index.ts";

Deno.test("symmetric-tree", () => {
    assertEquals(
        [
            {
                val: 1,
                left: {
                    val: 2,
                    left: { val: 3, left: null, right: null },
                    right: { val: 4, left: null, right: null },
                },
                right: {
                    val: 2,
                    left: { val: 4, left: null, right: null },
                    right: { val: 3, left: null, right: null },
                },
            },
            {
                val: 1,
                left: {
                    val: 2,
                    left: null,
                    right: { val: 3, left: null, right: null },
                },
                right: {
                    val: 2,
                    left: null,
                    right: { val: 3, left: null, right: null },
                },
            },
        ].map(isSymmetric),
        [true, false],
    );
});
