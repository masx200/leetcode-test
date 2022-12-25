import { assertEquals } from "asserts";
import productQueries from "./index.ts";
Deno.test("range-product-queries-of-powers", () => {
    const n = 15,
        queries = [
            [0, 1],
            [2, 2],
            [0, 3],
        ],
        输出 = [2, 4, 64];
    assertEquals(productQueries(n, queries), 输出);
});

Deno.test("range-product-queries-of-powers", () => {
    const n = 2, queries = [[0, 0]], 输出 = [2];
    assertEquals(productQueries(n, queries), 输出);
});
