import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import { runScript } from "leetcode-class";

import NumMatrix from "./index.ts";

Deno.test("range-sum-query-2d-immutable", () => {
    assertEquals(
        runScript(
            ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"],
            [
                [
                    [
                        [3, 0, 1, 4, 2],
                        [5, 6, 3, 2, 1],
                        [1, 2, 0, 1, 5],
                        [4, 1, 0, 1, 7],
                        [1, 0, 3, 0, 5],
                    ],
                ],
                [2, 1, 4, 3],
                [1, 1, 2, 2],
                [1, 2, 2, 4],
            ],
            [NumMatrix],
        ),
        [null, 8, 11, 12],
    );
});
