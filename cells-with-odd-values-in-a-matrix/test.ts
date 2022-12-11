import { assertEquals } from "../deps.ts";
import oddCells from "./index.ts";

Deno.test("cells-with-odd-values-in-a-matrix", () => {
    assertEquals(
        6,
        oddCells(2, 3, [
            [0, 1],
            [1, 1],
        ])
    );
    assertEquals(
        0,
        oddCells(2, 2, [
            [1, 1],
            [0, 0],
        ])
    );
    assertEquals(
        659,
        oddCells(41, 38, [
            [38, 33],
            [37, 24],
            [33, 6],
            [15, 0],
            [13, 22],
            [1, 13],
            [12, 8],
            [20, 4],
            [30, 9],
            [21, 0],
            [35, 29],
            [21, 20],
            [36, 24],
            [40, 16],
            [3, 24],
            [32, 6],
            [19, 28],
            [1, 13],
            [30, 19],
            [28, 20],
            [28, 2],
        ])
    );
});
