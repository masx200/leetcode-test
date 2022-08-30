import OrderedStream from "./index.ts";
import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
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
