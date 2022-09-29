import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";

import findDiagonalOrder from "./index.ts";

Deno.test("diagonal-traverse-ii", function () {
    assertEquals(
        [
            [1, 4, 2, 7, 5, 3, 8, 6, 9],
            [1, 6, 2, 8, 7, 3, 9, 4, 12, 10, 5, 13, 11, 14, 15, 16],
        ],
        [
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ],
            [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]],
        ].map(findDiagonalOrder),
    );
});
