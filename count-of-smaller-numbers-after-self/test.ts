import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import countSmaller from "./index.ts";

Deno.test("count-of-smaller-numbers-after-self", () => {
    assertEquals([[5, 2, 6, 1], [-1], [-1, -1]].map(countSmaller), [
        [2, 1, 1, 0],
        [0],
        [0, 0],
    ]);
});
