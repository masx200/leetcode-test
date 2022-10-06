import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { CustomFunction } from "./CustomFunction.ts";
import findSolution from "./index.ts";
Deno.test("find-positive-integer-solution-for-a-given-equation", () => {
    const inputs = [
        [1, 5],
        [2, 15],
        [3, 25],
        [4, 35],
        [5, 2],
        [6, 4],
        [7, 54],
        [8, 1],
        [9, 4],
    ];
    const outputs = [
        [[1, 4], [2, 3], [3, 2], [4, 1]],
        [[1, 15], [3, 5], [5, 3], [15, 1]],
        [[1, 24], [2, 21], [3, 16], [4, 9]],
        [[10, 5], [19, 4], [26, 3], [31, 2], [34, 1]],
        [[1, 1]],
        [[1, 1]],
        [[3, 3]],
        [[1, 1]],
        [[1, 2], [4, 1]],
    ];
    assertEquals(
        inputs.map((a) => findSolution(new CustomFunction(a[0]), a[1])),
        outputs,
    );
});
