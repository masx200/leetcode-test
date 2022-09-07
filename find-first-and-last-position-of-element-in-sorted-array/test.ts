import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import searchRange from "./index.ts";
Deno.test("find-first-and-last-position-of-element-in-sorted-array", () => {
    const inputs: [nums: number[], target: number][] = [
        [[5, 7, 7, 8, 8, 10], 8],
        [[5, 7, 7, 8, 8, 10], 6],
        [[], 0],
    ];
    assertEquals(
        inputs.map(([a, b]) => searchRange(a, b)),
        [
            [3, 4],
            [-1, -1],
            [-1, -1],
        ]
    );
});
