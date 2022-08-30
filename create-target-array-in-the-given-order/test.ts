import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import createTargetArray from "./index.ts";

const { test } = Deno;
test("create-target-array-in-the-given-order", () => {
    const inputs = [
        [
            [0, 1, 2, 3, 4],
            [0, 1, 2, 2, 1],
        ],
        [
            [1, 2, 3, 4, 0],
            [0, 1, 2, 3, 0],
        ],
        [[1], [0]],
    ];
    const outputs = [[0, 4, 1, 3, 2], [0, 1, 2, 3, 4], [1]];
    assertEquals(
        inputs.map((input) => createTargetArray(input[0], input[1])),
        outputs,
    );
});
