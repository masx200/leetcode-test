import { assertEquals } from "asserts";
import countDifferentSubsequenceGCDs from "./index.ts";

Deno.test("number-of-different-subsequences-gcds", () => {
    const nums = [6, 10, 3],
        OUTPUT = 5;
    assertEquals(countDifferentSubsequenceGCDs(nums), OUTPUT);
});
Deno.test("number-of-different-subsequences-gcds", () => {
    const nums = [5, 15, 40, 5, 6],
        OUTPUT = 7;
    assertEquals(countDifferentSubsequenceGCDs(nums), OUTPUT);
});
