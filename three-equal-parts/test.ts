import { assertEquals } from "asserts";

import threeEqualParts from "./index.ts";

Deno.test("three-equal-parts", () => {
    assertEquals(
        [
            [1, 0, 1, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 1, 0, 0, 1],
        ].map(threeEqualParts),
        [
            [0, 3],
            [-1, -1],
            [0, 2],
        ],
    );
});
