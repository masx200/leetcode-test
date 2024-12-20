import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";

import BrowserHistory from "./index.ts";

Deno.test("design-browser-history", () => {
    assertEquals(
        runScript(
            [
                "BrowserHistory",
                "visit",
                "visit",
                "visit",
                "back",
                "back",
                "forward",
                "visit",
                "forward",
                "back",
                "back",
            ],
            [
                ["leetcode.com"],
                ["google.com"],
                ["facebook.com"],
                ["youtube.com"],
                [1],
                [1],
                [1],
                ["linkedin.com"],
                [2],
                [2],
                [7],
            ],
            BrowserHistory,
        ),
        [
            null,
            null,
            null,
            null,
            "facebook.com",
            "google.com",
            "facebook.com",
            null,
            "linkedin.com",
            "google.com",
            "leetcode.com",
        ],
    );
});
