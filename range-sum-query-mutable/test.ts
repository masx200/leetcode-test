import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import { runScript } from "leetcode-class";
import NumArray from "./index.ts";
Deno.test("range-sum-query-mutable", () => {
    assertEquals(
        runScript(
            ["NumArray", "sumRange", "update", "sumRange"],
            [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]],
            NumArray,
        ),
        [null, 9, null, 8],
    );
});
