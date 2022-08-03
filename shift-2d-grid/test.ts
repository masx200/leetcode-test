import { assertEquals } from "../deps.ts";
import shiftGrid from "./index.ts";

Deno.test("shift-2d-grid", () => {
    const examples = [
        [
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ],
            9,
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ],
        ],
        [
            [
                [3, 8, 1, 9],
                [19, 7, 2, 5],
                [4, 6, 11, 10],
                [12, 0, 21, 13],
            ],
            4,
            [
                [12, 0, 21, 13],
                [3, 8, 1, 9],
                [19, 7, 2, 5],
                [4, 6, 11, 10],
            ],
        ],
        [
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ],
            1,
            [
                [9, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
        ],
    ] as Array<[number[][], number, number[][]]>;

    examples.forEach(([grid, k, expected]) => {
        const actual = shiftGrid(grid, k);
        // console.log(actual, expected);
        assertEquals(actual, expected);
    });
});
