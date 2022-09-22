import { assertEquals } from "https://deno.land/std@0.157.0/testing/asserts.ts";

import isMatch from "./index.ts";

Deno.test("wildcard-matching-1", () => {
    // console.log("simple test");

    assertEquals(true, isMatch("b", "b"));
    assertEquals(true, isMatch("adceb", "*b"));
    assertEquals(true, isMatch("adceb", "a*"));
    assertEquals(true, isMatch("adceb", "a?*"));
});

Deno.test("wildcard-matching-3", () => {
    // console.log("simple test");
    assertEquals(false, isMatch("aa", "a"));
    assertEquals(false, isMatch("cb", "?a"));
});
Deno.test("wildcard-matching-4", () => {
    // console.log("simple test");

    assertEquals(true, isMatch("aa", "*"));
    assertEquals(true, isMatch("", "******"));
});
Deno.test("wildcard-matching-5", () => {
    // console.log("hard test");
    assertEquals(
        true,
        isMatch(
            "baabbabababaabbabababbaabbbbaaabaaabbbbaaaaaabbbbaaabaaabbbbbabaabbbbbbbbabbbabbabbbbabbbbabbbbbbabababbaaaabbbbaabaaababbbabaaaabaabbbabbaabbabbbbabaababbbbbbbabbaaaabaaabbaaabaaaaababbbaaaabbbbbabbabb",
            "ba*ba*bb*a********abaa*bb**abb**b***ab**b*b*babb***a*bb*aaabb*****b*aabb**aa**b*a***b*bb*b*bb*a*bbbbb**",
        ),
    );
    assertEquals(
        false,
        isMatch(
            "abbaaababaaaabaaaaabaabbabababbaaabaaabaabaaaabbababaaaabababaabababbbbaabaabbbbbaababbbbbbbbaaababbbabbbbaabbbababbbabababbaabaaabaaabbbbbabaaaababababbbaabbaabbabbbaabbbaabaabaabbaabbbbbabbaabbbaabbb",
            "***a****a***a*bba*a**aba******b**a*a*b***aa***b*ab*ab*aab*ab*b*abbaa***b**a*bb*b*ab*a*abba**bb*****a",
        ),
    );
    assertEquals(
        false,
        isMatch(
            "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
            "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb",
        ),
    );
});
Deno.test("wildcard-matching-6", () => {
    assertEquals(
        false,
        isMatch(
            "aaaabaabaabbbabaabaabbbbaabaaabaaabbabbbaaabbbbbbabababbaabbabbbbaababaaabbbababbbaabbbaabbaaabbbaabbbbbaaaabaaabaabbabbbaabababbaabbbabababbaabaaababbbbbabaababbbabbabaaaaaababbbbaabbbbaaababbbbaabbbbb",
            "**a*b*b**b*b****bb******b***babaab*ba*a*aaa***baa****b***bbbb*bbaa*a***a*a*****a*b*a*a**ba***aa*a**a*",
        ),
    );
});
Deno.test("wildcard-matching-2", () => {
    // console.log("simple test");

    assertEquals(true, isMatch("dceb", "*b"));
    assertEquals(true, isMatch("adceb", "a*b"));
});
Deno.test("wildcard-matching-7", () => {
    assertEquals(true, isMatch("adce", "*a*"));
    assertEquals(true, isMatch("adceb", "*a*b"));
});
