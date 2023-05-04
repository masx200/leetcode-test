import { assertEquals } from "asserts";

import shortestDistance from "./index.ts";

Deno.test("shortest-word-distance", () => {
    const words = ["practice", "makes", "perfect", "coding", "makes"];

    const word1 = "coding",
        word2 = "practice";
    assertEquals(3, shortestDistance(words, word1, word2));
});
Deno.test("shortest-word-distance", () => {
    const words = ["practice", "makes", "perfect", "coding", "makes"];

    const word1 = "makes", word2 = "coding";
    assertEquals(1, shortestDistance(words, word1, word2));
});
