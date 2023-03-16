import { assertEquals } from "https://deno.land/std@0.180.0/testing/asserts.ts";
import { runScript } from "leetcode-class";
import MKAverage from "./index.ts";

Deno.test("finding-mk-average", () => {
    assertEquals(
        runScript(
            [
                "MKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
            ],
            [
                [3, 1],
                [58378],
                [34909],
                [],
                [94574],
                [29985],
                [],
                [77484],
                [13400],
                [],
                [41607],
            ],
            MKAverage,
        ),
        [null, null, null, -1, null, null, 34909, null, null, 29985, null],
    );
});
