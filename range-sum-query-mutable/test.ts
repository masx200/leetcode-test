import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { runScript } from "leetcode-class";
import NumArray from "./index.ts";
import NumArray2 from "./NumArray.ts";
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
Deno.test("range-sum-query-mutable", () => {
    assertEquals(
        runScript(
            ["NumArray", "sumRange", "update", "sumRange"],
            [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]],
            NumArray2,
        ),
        [null, 9, null, 8],
    );
});
