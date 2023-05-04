import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";

import StockSpanner from "./index.ts";

Deno.test("online-stock-span", () => {
    assertEquals(
        runScript(
            [
                "StockSpanner",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
            ],
            [[], [100], [80], [60], [70], [60], [75], [85]],
            StockSpanner,
        ),
        [null, 1, 1, 1, 2, 1, 4, 6],
    );
});
