import { assertEquals } from "../deps.ts";
import TweetCounts from "./index.ts";

Deno.test("tweet-counts-per-frequency-1", () => {
    const tweetCounts = new TweetCounts();
    tweetCounts.recordTweet("tweet3", 0);
    tweetCounts.recordTweet("tweet3", 60);
    tweetCounts.recordTweet("tweet3", 10);
    assertEquals(
        [2],
        tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59),
    );
    assertEquals(
        [2, 1],
        tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60),
    );

    tweetCounts.recordTweet("tweet3", 120);
    assertEquals(
        [4],
        tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210),
    );
});
Deno.test("tweet-counts-per-frequency-2", () => {
    const tweetCounts = new TweetCounts();
    const targets = [
        "recordTweet",
        "recordTweet",
        "recordTweet",
        "recordTweet",
        "getTweetCountsPerFrequency",
        "getTweetCountsPerFrequency",
        "recordTweet",
        "getTweetCountsPerFrequency",
    ] as const;

    const args = [
        ["tweet3", 0],
        ["tweet3", 60],
        ["tweet3", 10],
        ["tweet3", 10],
        ["minute", "tweet3", 0, 59],
        ["minute", "tweet3", 0, 60],
        ["tweet3", 120],
        ["hour", "tweet3", 0, 210],
    ] as const;
    const results = [null, null, null, null, [3], [3, 1], null, [5]] as const;

    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        const arg = args[i];
        const result = results[i];
        const ans = Reflect.apply(
            Reflect.get(tweetCounts, target),
            tweetCounts,
            arg,
        );
        if (result !== null) {
            assertEquals(result, ans);
        }
    }
});
