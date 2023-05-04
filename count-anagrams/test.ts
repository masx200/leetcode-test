import { assertEquals } from "asserts";

import countAnagrams from "./index.ts";

Deno.test("count-anagrams", () => {
    const s = "too hot",
        输出 = 18;

    assertEquals(countAnagrams(s), 输出);
});
Deno.test("count-anagrams", () => {
    const s = "aa",
        输出 = 1;

    assertEquals(countAnagrams(s), 输出);
});
