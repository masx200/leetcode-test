import { assertEquals } from "asserts";

import mincostToHireWorkers from "./index.ts";

Deno.test("minimum-cost-to-hire-k-workers", () => {
    const cases: [quality: number[], wage: number[], k: number, r: number][] = [
        [[10, 20, 5], [70, 50, 30], 2, 105.0],
        [[3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3, 30.66667],
        [
            [10, 20, 5, 99, 99, 999, 99, 999, 999],
            [70, 50, 30, 2, 2, 2, 2, 2, 3],
            6,
            66.54545,
        ],
        [[3, 1, 10, 10, 1, 8], [4, 8, 2, 2, 7, 8], 5, 184.0],
    ];
    cases.forEach(([a, b, c, d]) => {
        assertEquals(mincostToHireWorkers(a, b, c).toFixed(5), d.toFixed(5));
    });
});
