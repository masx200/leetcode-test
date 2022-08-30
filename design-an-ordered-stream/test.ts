Deno.test("design-an-ordered-stream", () => {
    assertEquals(
        runScript(
            ["OrderedStream", "insert", "insert", "insert", "insert", "insert"],
            [[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [
                4,
                "ddddd",
            ]],
            [OrderedStream],
        ),
        [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]],
    );
});
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { runScript } from "leetcode-class";
import OrderedStream from "./index.ts";
