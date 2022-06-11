import { assertEquals } from "../deps.ts";
import maxPoints from "./index.ts";

Deno.test("max-points-on-a-line", () => {
    const examples: Array<[number[][], number]> = [
        [
            [
                [1, 1],
                [3, 2],
                [5, 3],
                [4, 1],
                [2, 3],
                [1, 4],
            ],
            4,
        ],
        [
            [
                [1, 1],
                [2, 2],
                [3, 3],
            ],
            3,
        ],
    ];
    examples.forEach(([input, output]) => {
        assertEquals(output, maxPoints(input));
    });
});
