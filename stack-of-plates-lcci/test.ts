import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { runScript } from "leetcode-class";
import { StackOfPlates } from "./index.ts";

Deno.test("StackOfPlates test", () => {
    assertEquals(
        [null, null, null, 2, 1, -1],
        runScript(
            ["StackOfPlates", "push", "push", "popAt", "pop", "pop"],
            [[1], [1], [2], [1], [], []],
            StackOfPlates
        )
    );
});
