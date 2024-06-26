import { assertEquals } from "asserts";

import lengthOfLongestSubstring from "./index.ts";

Deno.test("longest-substring-without-repeating-characters", () => {
    assertEquals(lengthOfLongestSubstring("abcabcbb"), 3);
});
Deno.test("longest-substring-without-repeating-characters", () => {
    assertEquals(lengthOfLongestSubstring("pwwkew"), 3);
});
Deno.test("longest-substring-without-repeating-characters", () => {
    assertEquals(lengthOfLongestSubstring("bbbbb"), 1);
});
