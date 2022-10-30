import { assertEquals } from "asserts";

import maxSubArray from "./index.ts";

Deno.test("maximum-subarray", () => {
    assertEquals(
        [[-2, 1, -3, 4, -1, 2, 1, -5, 4], [1], [5, 4, -1, 7, 8]].map((input) =>
            maxSubArray(input)
        ),
        [6, 1, 23],
    );
});
