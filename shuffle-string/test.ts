import { assertEquals } from "asserts";

import restoreString from "./index.ts";

Deno.test("shuffle-string", () => {
    const s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3], 输出 = "leetcode";
    assertEquals(restoreString(s, indices), 输出);
});

Deno.test("shuffle-string", () => {
    const s = "abc", indices = [0, 1, 2], 输出 = "abc";
    assertEquals(restoreString(s, indices), 输出);
});
