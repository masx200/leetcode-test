import { assertEquals } from "https://deno.land/std@0.157.0/testing/asserts.ts";

import kSmallestPairs from "./index.ts";

Deno.test("find-k-pairs-with-smallest-sums", () => {
    assertEquals(
        [[1, 2], [1, 4], [1, 6]],
        kSmallestPairs([1, 7, 11], [2, 4, 6], 3),
    );
    assertEquals(
        [[1, 1], [1, 1]],
        kSmallestPairs([1, 1, 2], [1, 2, 3], 2),
    );
    assertEquals(
        [[1, 3], [2, 3]],
        kSmallestPairs([1, 2], [3], 3),
    );
});
