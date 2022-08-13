import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import isValidBST from "./index.ts";
Deno.test("validate-binary-search-tree", () => {
    const inputs = [
        {
            val: 2,
            left: { val: 1, left: null, right: null },
            right: { val: 3, left: null, right: null },
        },
        {
            val: 5,
            left: { val: 1, left: null, right: null },
            right: {
                val: 4,
                left: { val: 3, left: null, right: null },
                right: { val: 6, left: null, right: null },
            },
        },
    ];
    assertEquals([true, false], inputs.map(isValidBST));
});
