import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import minSubsequence from "./index.ts";
Deno.test("minimum-subsequence-in-non-increasing-order", () => {
    const inputs = [[4, 3, 10, 9, 8], [4, 4, 7, 6, 7], [6]];
    const outputs = [[10, 9], [7, 7, 6], [6]];

    assertEquals(inputs.map(minSubsequence), outputs);
});
