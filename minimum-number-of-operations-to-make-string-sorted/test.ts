import { assertEquals } from "asserts";

import makeStringSorted from "./index.ts";

Deno.test("minimum-number-of-operations-to-make-string-sorted", () => {
    const s = "leetcodeleetcodeleetcode",
        输出 = 982157772;
    assertEquals(makeStringSorted(s), 输出);
});
Deno.test("minimum-number-of-operations-to-make-string-sorted", () => {
    const s = "cdbea",
        输出 = 63;
    assertEquals(makeStringSorted(s), 输出);
});
Deno.test("minimum-number-of-operations-to-make-string-sorted", () => {
    const s = "aabaa",
        输出 = 2;
    assertEquals(makeStringSorted(s), 输出);
});
Deno.test("minimum-number-of-operations-to-make-string-sorted", () => {
    const s = "cba",
        输出 = 5;
    assertEquals(makeStringSorted(s), 输出);
});
