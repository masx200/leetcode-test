import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";

import largestTriangleArea from "./index.ts";

Deno.test("largest-triangle-area", () => {
    assertEquals(
        [
            [
                [0, 0],
                [0, 1],
                [1, 0],
                [0, 2],
                [2, 0],
            ],
            [
                [1, 0],
                [0, 0],
                [0, 1],
            ],
        ].map(largestTriangleArea),
        [2.0, 0.5],
    );
});
