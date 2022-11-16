import { assertEquals } from "asserts";
import numMatchingSubseq from "./index.ts";
import numMatchingSubseq1 from "./numMatchingSubseq.ts";
Deno.test("number-of-matching-subsequences", () => {
    const s = "abcde",
        words = ["a", "bb", "acd", "ace"];
    assertEquals(3, numMatchingSubseq(s, words));
});
Deno.test("number-of-matching-subsequences", () => {
    const s = "abcde",
        words = ["a", "bb", "acd", "ace"];
    assertEquals(3, numMatchingSubseq1(s, words));
});
Deno.test("number-of-matching-subsequences", () => {
    const s = "dsahjpjauf",
        words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];
    assertEquals(2, numMatchingSubseq(s, words));
});
Deno.test("number-of-matching-subsequences", () => {
    const s = "dsahjpjauf",
        words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];
    assertEquals(2, numMatchingSubseq1(s, words));
});
Deno.test("number-of-matching-subsequences", () => {
    for (const nmss of [numMatchingSubseq1, numMatchingSubseq]) {
        assertEquals(
            nmss("uuuuabcde", ["a", "bb", "acd", "ace", "uuuu", "uuuu"]),
            5,
        );
    }
});
