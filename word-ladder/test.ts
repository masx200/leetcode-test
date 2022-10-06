import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import ladderLength from "./index.ts";

Deno.test("word-ladder", () => {
    const beginWord = "hit",
        endWord = "cog",
        wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
    assertEquals(5, ladderLength(beginWord, endWord, wordList));
});
Deno.test("word-ladder", () => {
    const beginWord = "hit",
        endWord = "cog",
        wordList = ["hot", "dot", "dog", "lot", "log"];
    assertEquals(0, ladderLength(beginWord, endWord, wordList));
});
Deno.test("word-ladder", () => {
    assertEquals(2, ladderLength("a", "c", ["a", "b", "c"]));
});
Deno.test("word-ladder", () => {
    assertEquals(0, ladderLength("hot", "dog", ["hot", "dog"]));
});
