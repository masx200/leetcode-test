import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";
import maxProfit from "./index.ts";

Deno.test("best-time-to-buy-and-sell-stock", () => {
    assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);
    assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
    assertEquals(maxProfit([1, 2, 3, 4, 5]), 4);
});
Deno.test("best-time-to-buy-and-sell-stock", () => {
    const outputs = [
        5,
        0,
        4,
        1,
        5,
        6,
        1,
        7,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        5,
        0,
        4,
    ];
    const inputs = [
        [7, 1, 5, 3, 6, 4],
        [7, 6, 4, 3, 1],
        [1, 2, 3, 4, 5],
        [7, 6, 4, 3, 1, 2],
        [7, 1, 5, 3, 6, 4, 2],
        [1, 2, 3, 4, 5, 6, 7],
        [7, 6, 4, 3, 1, 2, 0],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [7, 6, 4, 3, 1, 2, 0, 9],
        [7, 6, 4, 3, 1, 2, 0, 9, 10],
        [7, 6, 4, 3, 1, 2, 0, 9, 10, 11],
        [7, 6, 4, 3, 1, 2, 0, 9, 10, 11, 12],
        [7, 6, 4, 3, 1, 2, 0, 9, 10, 11, 12, 13],
        [7, 6, 4, 3, 1, 2, 0, 9, 10, 11, 12, 13, 14],
        [7, 6, 4, 3, 1, 2, 0, 9, 10, 11, 12, 13, 14, 15],
        [7, 6, 4, 3, 1, 2, 0, 9, 10, 11, 12, 13, 14, 15, 16],
        [7, 6, 4, 3, 1, 2, 0, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        [7, 1, 5, 3, 6, 4],
        [7, 6, 4, 3, 1],
        [1, 2, 3, 4, 5],
    ];
    assertEquals(outputs, inputs.map(maxProfit));
});
