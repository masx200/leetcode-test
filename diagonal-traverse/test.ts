import { assertEquals } from "asserts";

import findDiagonalOrder from "./index.ts";

Deno.test("diagonal-traverse", function () {
    assertEquals(
        [
            [1, 2, 4, 7, 5, 3, 6, 8, 9],
            [1, 2, 3, 4],
        ],
        [
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ],
            [
                [1, 2],
                [3, 4],
            ],
        ].map(findDiagonalOrder),
    );
});
