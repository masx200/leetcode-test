import { assertEquals } from "asserts";

import subtractProductAndSum from "./index.ts";

Deno.test("subtract-the-product-and-sum-of-digits-of-an-integer", () => {
    assertEquals(
        [234, 4421, 1, 2222, 100000, 48264].map(subtractProductAndSum),
        [15, 21, 0, 8, -1, 1512],
    );
});
