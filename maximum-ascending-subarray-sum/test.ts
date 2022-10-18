import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";
import maxAscendingSum from "./index.ts";
Deno.test("maximum-ascending-subarray-sum", () => {
    assertEquals(
        [
            [10, 20, 30, 5, 10, 50],
            [10, 20, 30, 40, 50],
            [12, 17, 15, 13, 10, 11, 12],
        ].map(maxAscendingSum),
        [65, 150, 33],
    );
});
