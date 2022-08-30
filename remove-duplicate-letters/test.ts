import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

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
