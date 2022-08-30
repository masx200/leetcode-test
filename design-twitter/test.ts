import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";

import Twitter from "./index.ts";

Deno.test("design-twitter", () => {
    assertEquals(
        runScript(
            [
                "Twitter",
                "postTweet",
                "getNewsFeed",
                "follow",
                "postTweet",
                "getNewsFeed",
                "unfollow",
                "getNewsFeed",
            ],
            [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]],
            [Twitter],
        ),
        [null, null, [5], null, null, [6, 5], null, [5]],
    );
});
