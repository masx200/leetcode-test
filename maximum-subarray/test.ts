import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";

import maxSubArray from "./index.ts";

Deno.test("maximum-subarray", () => {
    assertEquals(
        [[-2, 1, -3, 4, -1, 2, 1, -5, 4], [1], [5, 4, -1, 7, 8]].map((input) =>
            maxSubArray(input)
        ),
        [6, 1, 23],
    );
});
