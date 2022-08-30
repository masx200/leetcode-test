import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

import rotate from "./index.ts";

Deno.test("test-Rotate-Image-1", () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    rotate(matrix);
    assertEquals(matrix, [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]);
});
Deno.test("test-Rotate-Image-2", () => {
    const matrix = [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
    ];
    rotate(matrix);
    assertEquals(matrix, [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
    ]);
});
Deno.test("test-Rotate-Image-3", () => {
    const matrix = [
        [5],
    ];
    rotate(matrix);
    assertEquals(matrix, [
        [5],
    ]);
});
