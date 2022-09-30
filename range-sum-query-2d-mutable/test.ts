import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";

import NumMatrix from "./index.ts";

Deno.test("range-sum-query-2d-mutable", () => {
    const matrix = [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5],
    ];
    const nm = new NumMatrix(matrix);
    assertEquals(nm.sumRegion(2, 1, 4, 3), 8);
    assertEquals(nm.sumRegion(0, 0, 4, 4), 58);
    nm.update(3, 2, 2);
    assertEquals(nm.sumRegion(2, 1, 4, 3), 10);
    assertEquals(nm.sumRegion(0, 0, 0, 0), 3);
    assertEquals(nm.sumRegion(0, 0, 1, 1), 14);
    assertEquals(nm.sumRegion(0, 0, 4, 4), 60);
});
