import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";

import str2tree from "./index.ts";

Deno.test("construct-binary-tree-from-string", () => {
    assertEquals(["", "4(2(3)(1))(6(5))"].map(str2tree), [
        null,
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
    ]);
});
