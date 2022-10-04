import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import countPaths from "./index.ts";
Deno.test("number-of-ways-to-arrive-at-destination", () => {
    assertEquals(
        (
            [
                [
                    7,
                    [
                        [0, 6, 7],
                        [0, 1, 2],
                        [1, 2, 3],
                        [1, 3, 3],
                        [6, 3, 3],
                        [3, 5, 1],
                        [6, 5, 1],
                        [2, 5, 1],
                        [0, 4, 5],
                        [4, 6, 2],
                    ],
                ],
                [2, [[1, 0, 10]]],
            ] as [n: number, roads: number[][]][]
        ).map((a) => countPaths(...a)),
        [4, 1],
    );
});
