import { assertEquals } from "asserts";

import numberOfGoodPaths from "./index.ts";

Deno.test("number-of-good-paths", () => {
    const inputs: [vals: number[], edges: number[][]][] = [
        [[1, 3, 2, 1, 3], [[0, 1], [0, 2], [2, 3], [2, 4]]],
        [[1, 1, 2, 2, 3], [[0, 1], [1, 2], [2, 3], [2, 4]]],
        [[1], []],
        [[2, 5, 5, 1, 5, 2, 3, 5, 1, 5], [
            [0, 1],
            [2, 1],
            [3, 2],
            [3, 4],
            [3, 5],
            [5, 6],
            [1, 7],
            [8, 4],
            [
                9,
                7,
            ],
        ]],
    ];
    const outputs = [6, 7, 1, 20];
    assertEquals(inputs.map((a) => numberOfGoodPaths(a[0], a[1])), outputs);
});
