import { assertEquals } from "asserts";

import minimumValueToGetPositiveStepByStepSum from "./index.ts";

Deno.test("minimum-value-to-get-positive-step-by-step-sum", () => {
    assertEquals(
        [
            [-3, 2, -3, 4, 2],
            [1, 2],
            [1, -2, -3],
        ].map((arr) => minimumValueToGetPositiveStepByStepSum(arr)),
        [5, 1, 5],
    );
});
