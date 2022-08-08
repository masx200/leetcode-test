import { assertEquals } from "../deps.ts";
import WordDictionary from "./index.ts";

Deno.test("design-add-and-search-words-data-structure", () => {
    const results: boolean[] = [];
    const wordDictionary: WordDictionary = WordDictionary();
    wordDictionary.addWord("bad");
    wordDictionary.addWord("dad");
    wordDictionary.addWord("mad");
    results.push(wordDictionary.search("pad")); // 返回 False
    results.push(wordDictionary.search("bad")); // 返回 True
    results.push(wordDictionary.search(".ad")); // 返回 True
    results.push(wordDictionary.search("b..")); // 返回 True
    assertEquals(results, [false, true, true, true]);
});
