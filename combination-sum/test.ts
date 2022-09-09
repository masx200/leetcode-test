import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import combinationSum from "./index.ts";

Deno.test("combination-sum", function () {
    const inputs: Array<Parameters<typeof combinationSum>> = [
        [[2, 3, 6, 7], 7],
        [[2, 3, 5], 8],
        [[2], 1],
    ];
    const outputs = [
        [[2, 2, 3], [7]],
        [
            [2, 2, 2, 2],
            [2, 3, 3],
            [3, 5],
        ],
        [],
    ];
    assertEquals(
        inputs.map(([c, t]) => combinationSum(c, t)),
        outputs,
    );
});
