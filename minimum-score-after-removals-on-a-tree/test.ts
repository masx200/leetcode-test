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
        [[3, 8, 8, 9, 8, 6, 9, 10, 30, 2, 22, 26, 16, 17, 26, 32, 22, 7], [
            [12, 2],
            [12, 11],
            [12, 13],
            [10, 11],
            [12, 1],
            [11, 9],
            [11, 8],
            [3, 11],
            [15, 2],
            [11, 7],
            [12, 4],
            [12, 5],
            [16, 10],
            [17, 5],
            [11, 6],
            [7, 0],
            [1, 14],
        ]],
    ];
    const outputs = [701, 9, 0, 17];
    assertEquals(outputs, examples.map((a) => minimumScore(a[0], a[1])));
});
