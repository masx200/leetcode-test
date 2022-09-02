import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";

import insert from "./index.ts";

Deno.test("insert-interval", () => {
    const intervals = [
            [1, 3],
            [6, 9],
        ],
        newInterval = [2, 5];
    const output = [
        [1, 5],
        [6, 9],
    ];
    assertEquals(output, insert(intervals, newInterval));
});
Deno.test("insert-interval", () => {
    const intervals = [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ],
        newInterval = [4, 8];
    const output = [
        [1, 2],
        [3, 10],
        [12, 16],
    ];
    assertEquals(output, insert(intervals, newInterval));
});
Deno.test("insert-interval", () => {
    const intervals = [] as number[][],
        newInterval = [5, 7];
    const output = [[5, 7]];
    assertEquals(output, insert(intervals, newInterval));
});
Deno.test("insert-interval", () => {
    const intervals = [[1, 5]],
        newInterval = [2, 3];
    const output = [[1, 5]];
    assertEquals(output, insert(intervals, newInterval));
});
Deno.test("insert-interval", () => {
    const intervals = [[1, 5]],
        newInterval = [2, 7];
    const output = [[1, 7]];
    assertEquals(output, insert(intervals, newInterval));
});
