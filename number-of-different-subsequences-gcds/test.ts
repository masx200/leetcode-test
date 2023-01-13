import { assertEquals } from "asserts";
import countDifferentSubsequenceGCDs from "./index.ts";
Deno.test("number-of-different-subsequences-gcds", () => {
    const nums = [6, 10, 3],
        输出 = 5;
    assertEquals(countDifferentSubsequenceGCDs(nums), 输出);
});
Deno.test("number-of-different-subsequences-gcds", () => {
    const nums = [5, 15, 40, 5, 6],
        输出 = 7;
    assertEquals(countDifferentSubsequenceGCDs(nums), 输出);
});
