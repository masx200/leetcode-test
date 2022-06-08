import { assertEquals } from "../deps.ts";
import isBoomerang from "./index.ts";

Deno.test("valid-boomerang", () => {
    const examples = [
        [
            [
                [4, 4],
                [9, 9],
                [3, 3],
            ],
            false,
        ],
        [
            [
                [0, 0],
                [2, 0],
                [0, 2],
            ],
            true,
        ],
        [
            [
                [1, 1],
                [2, 3],
                [3, 2],
            ],
            true,
        ],
        [
            [
                [1, 1],
                [2, 2],
                [3, 3],
            ],
            false,
        ],
    ] as Array<[number[][], boolean]>;
    examples.forEach(([points, result]) => {
        assertEquals(result, isBoomerang(points));
    });
});
