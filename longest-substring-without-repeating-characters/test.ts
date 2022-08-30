import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
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
