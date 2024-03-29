import { assertEquals } from "asserts";

import merge from "./index.ts";

Deno.test("merge-intervals", () => {
    const inputs = [
        [
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18],
        ],
        [
            [1, 4],
            [4, 5],
        ],
    ];
    const outputs = [
        [
            [1, 6],
            [8, 10],
            [15, 18],
        ],
        [[1, 5]],
    ];
    assertEquals(inputs.map((input) => merge(input)), outputs);
});
