import { assertEquals } from "../deps.ts";
import minimumScore from "./index.ts";

Deno.test("minimum-score-after-removals-on-a-tree", () => {
    const examples: Array<[nums: number[], edges: number[][]]> = [
        [[85, 85, 82, 84, 84, 882, 99, 99, 99, 99], [
            [0, 1],
            [1, 2],
            [5, 2],
            [4, 3],
            [1, 3],
            [5, 6],
            [5, 7],
            [5, 8],
            [5, 9],
        ]],
        [
            [1, 5, 5, 4, 11],
            [[0, 1], [1, 2], [1, 3], [3, 4]],
        ],
        [[5, 5, 2, 4, 4, 2], [[0, 1], [1, 2], [5, 2], [4, 3], [1, 3]]],
    ];
    const outputs = [701, 9, 0];
    assertEquals(outputs, examples.map((a) => minimumScore(a[0], a[1])));
});
