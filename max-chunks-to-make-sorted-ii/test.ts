import { assertEquals } from "asserts";

import maxChunksToSorted from "./index.ts";

Deno.test("max-chunks-to-make-sorted-ii", () => {
    assertEquals(maxChunksToSorted([5, 4, 3, 2, 1]), 1);
    assertEquals(maxChunksToSorted([2, 1, 3, 4, 4]), 4);
});
