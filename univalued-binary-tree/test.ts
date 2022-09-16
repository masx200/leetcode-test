import { assertEquals } from "https://deno.land/std@0.156.0/testing/asserts.ts";

import isUnivalTree from "./index.ts";

Deno.test("univalued-binary-tree", () => {
    assertEquals(
        false,
        isUnivalTree({
            val: 2,
            left: {
                val: 2,
                left: { val: 5, left: null, right: null },
                right: { val: 2, left: null, right: null },
            },
            right: { val: 2, left: null, right: null },
        }),
    );
    assertEquals(
        true,
        isUnivalTree({
            val: 1,
            left: {
                val: 1,
                left: { val: 1, left: null, right: null },
                right: { val: 1, left: null, right: null },
            },
            right: {
                val: 1,
                left: null,
                right: { val: 1, left: null, right: null },
            },
        }),
    );
});
