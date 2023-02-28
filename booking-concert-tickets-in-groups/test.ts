import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { runScript } from "leetcode-class";

import BookMyShow from "./index.ts";

Deno.test("booking-concert-tickets-in-groups", () => {
    assertEquals(
        runScript(
            ["BookMyShow", "gather", "gather", "scatter", "scatter"],
            [
                [2, 5],
                [4, 0],
                [2, 0],
                [5, 1],
                [5, 1],
            ],
            BookMyShow,
        ),
        [null, [0, 0], [], true, false],
    );
});
