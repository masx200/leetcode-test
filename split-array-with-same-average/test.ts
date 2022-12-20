import { assertEquals } from "asserts";

import splitArraySameAverage from "./index.ts";

Deno.test("split-array-with-same-average", () => {
    assertEquals(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8]), true);
    assertEquals(splitArraySameAverage([3, 1]), false);
});
