import { assertEquals } from "asserts";
import countAnagrams from "./index.ts";

Deno.test("count-anagrams", () => {
    const s = "too hot",
        OUTPUT = 18;

    assertEquals(countAnagrams(s), OUTPUT);
});
Deno.test("count-anagrams", () => {
    const s = "aa",
        OUTPUT = 1;

    assertEquals(countAnagrams(s), OUTPUT);
});
