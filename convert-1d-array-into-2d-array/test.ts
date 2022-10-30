import { assertEquals } from "../deps.ts";
import convert1DArrayInto2DArray from "./index.ts";

Deno.test("convert-1d-array-into-2d-array", () => {
    assertEquals(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        convert1DArrayInto2DArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3),
    );
});
Deno.test("convert-1d-array-into-2d-array", () => {
    const original = [1, 2, 3, 4],
        m = 2,
        n = 2;
    assertEquals(
        [
            [1, 2],
            [3, 4],
        ],
        convert1DArrayInto2DArray(original, m, n),
    );
});
Deno.test("convert-1d-array-into-2d-array", () => {
    const original = [3],
        m = 1,
        n = 2,
        result: number[][] = [];
    assertEquals(result, convert1DArrayInto2DArray(original, m, n));
});
Deno.test("convert-1d-array-into-2d-array", () => {
    const original = [1, 2],
        m = 1,
        n = 1,
        result: number[][] = [];
    assertEquals(result, convert1DArrayInto2DArray(original, m, n));
});
Deno.test("convert-1d-array-into-2d-array", () => {
    const original = [1, 2, 3],
        m = 1,
        n = 3;
    assertEquals([[1, 2, 3]], convert1DArrayInto2DArray(original, m, n));
});
