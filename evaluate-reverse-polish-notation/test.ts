import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";

import evalRPN from "./index.ts";

Deno.test("evaluate-reverse-polish-notation", () => {
    assertEquals(
        [
            ["2", "1", "+", "3", "*"],
            ["4", "13", "5", "/", "+"],
            [
                "10",
                "6",
                "9",
                "3",
                "+",
                "-11",
                "*",
                "/",
                "*",
                "17",
                "+",
                "5",
                "+",
            ],
            ["3", "4", "+", "2", "*", "7", "/"],
            ["4", "5", "7", "2", "+", "-", "*"],
            ["4", "2", "+", "3", "5", "1", "-", "*", "+"],
            ["100", "200", "+", "2", "/", "5", "*", "7", "+"],
        ].map(evalRPN),
        [9, 6, 22, 2, -16, 18, 757],
    );
});
