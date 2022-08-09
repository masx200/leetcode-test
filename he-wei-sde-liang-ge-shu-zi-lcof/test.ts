import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";
import twoSum from "./index.ts";
Deno.test("he-wei-sde-liang-ge-shu-zi-lcof", () => {
    assertEquals(twoSum([2, 7, 11, 15], 9), [2, 7]);
});
Deno.test("he-wei-sde-liang-ge-shu-zi-lcof", () => {
    assertEquals(twoSum([10, 26, 30, 31, 47, 60], 40), [10, 30]);
});
Deno.test("he-wei-sde-liang-ge-shu-zi-lcof", () => {
    assertEquals(twoSum([16, 16, 18, 24, 30, 32], 48), [16, 32]);
});
