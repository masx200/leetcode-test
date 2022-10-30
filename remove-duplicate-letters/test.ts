import { assertEquals } from "asserts";

import smallestSubsequence from "./index.ts";

Deno.test("remove-duplicate-letters", () => {
    const examples = [
        ["bcabc", "abc"],
        ["cbacdcbc", "acdb"],
    ];

    examples.forEach(([given, expected]) => {
        assertEquals(smallestSubsequence(given), expected);
    });
});
