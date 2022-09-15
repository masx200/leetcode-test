import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import abbreviateProduct from "./index.ts";

Deno.test("abbreviating-the-product-of-a-range", () => {
    const input = [[1, 4], [1000, 4000], [2, 11], [371, 375], [10000, 10000], [
        1,
        10000,
    ]];
    const result = input.map((a) => abbreviateProduct(a[0], a[1]));
    const expected = [
        "24e0",
        "45448...88768e753",
        "399168e2",
        "7219856259e3",
        "1e4",
        "28462...79008e2499",
    ];
    assertEquals(
        result,
        expected,
    );
});
