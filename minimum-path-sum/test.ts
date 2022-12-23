import { assertStrictEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import minPathSum from "./index.ts";

Deno.test("minimum-path-sum", () => {
    const grid = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ];
    const 输出 = 7;
    assertStrictEquals(minPathSum(grid), 输出);
});
Deno.test("minimum-path-sum", () => {
    const grid = [
        [1, 2, 3],
        [4, 5, 6],
    ];
    const 输出 = 12;
    assertStrictEquals(minPathSum(grid), 输出);
});
