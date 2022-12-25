import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
import Operations from "./index.ts";

Deno.test("operations-lcci", () => {
    assertEquals(
        runScript(
            [
                "Operations",
                "minus",
                "minus",
                "multiply",
                "multiply",
                "divide",
                "divide",
            ],
            [
                [],
                [0, -2147483647],
                [-1, 2147483647],
                [-1, -2147483647],
                [-100, 21474836],
                [2147483647, -1],
                [-2147483648, 1],
            ],
            Operations,
        ),
        [
            null,
            2147483647,
            -2147483648,
            2147483647,
            -2147483600,
            -2147483647,
            -2147483648,
        ],
    );
});
