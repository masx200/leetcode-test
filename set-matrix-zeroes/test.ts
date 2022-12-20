import { assertEquals } from "asserts";

import setZeroes from "../zero-matrix-lcci/index.ts";

Deno.test("set-matrix-zeroes", () => {
    assertEquals(
        [
            [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ],
            [
                [0, 1, 2, 0],
                [3, 4, 5, 2],
                [1, 3, 1, 5],
            ],
        ].map((v) => (setZeroes(v), v)),
        [
            [
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
            ],
            [
                [0, 0, 0, 0],
                [0, 4, 5, 0],
                [0, 3, 1, 0],
            ],
        ],
    );
});
