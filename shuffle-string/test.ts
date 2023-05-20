import { assertEquals } from "asserts";

import restoreString from "./index.ts";

Deno.test("shuffle-string", () => {
    const s = "codeleet",
        indices = [4, 5, 6, 7, 0, 2, 1, 3],
        OUTPUT = "leetcode";
    assertEquals(restoreString(s, indices), OUTPUT);
});

Deno.test("shuffle-string", () => {
    const s = "abc", indices = [0, 1, 2], OUTPUT = "abc";
    assertEquals(restoreString(s, indices), OUTPUT);
});
