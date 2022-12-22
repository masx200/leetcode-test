import { assertEquals } from "asserts";
import shortestDistance from "./index.ts";
Deno.test("shortest-word-distance", () => {
    const words = ["practice", "makes", "perfect", "coding", "makes"];

    let word1 = "coding",
        word2 = "practice";
    const sd = new shortestDistance(words);
    assertEquals(3, sd.shortest(word1, word2));
    word1 = "makes";
    word2 = "coding";
    assertEquals(1, sd.shortest(word1, word2));
});
