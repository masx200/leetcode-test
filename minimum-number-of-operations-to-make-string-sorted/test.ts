import { assertEquals } from "asserts";

import makeStringSorted from "./index.ts";

Deno.test("minimum-number-of-operations-to-make-string-sorted", () => {
    const s = "leetcodeleetcodeleetcode",
        OUTPUT = 982157772;
    assertEquals(makeStringSorted(s), OUTPUT);
});
Deno.test("minimum-number-of-operations-to-make-string-sorted", () => {
    const s = "cdbea",
        OUTPUT = 63;
    assertEquals(makeStringSorted(s), OUTPUT);
});
Deno.test("minimum-number-of-operations-to-make-string-sorted", () => {
    const s = "aabaa",
        OUTPUT = 2;
    assertEquals(makeStringSorted(s), OUTPUT);
});
Deno.test("minimum-number-of-operations-to-make-string-sorted", () => {
    const s = "cba",
        OUTPUT = 5;
    assertEquals(makeStringSorted(s), OUTPUT);
});
