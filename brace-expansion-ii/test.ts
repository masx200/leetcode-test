import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";

import braceExpansionII from "./index.ts";

Deno.test("brace-expansion-ii", () => {
    const inputs = [
        "{a,b}",
        "{a,b}{c,{d,e}}",
        "{{a,z},a{b,c},{ab,z}}",
        "{a,b}c{d,e}f",
        "abcd",
        "{a,b,c}",
        "zabcde{a,b,c}",
        "zab",
        "{a,b,c}{a,b,c}",
        "{a,b}{c,{d,e}}",
        "{z,{a,b}{c,{d,e}}}",
        "{abc{x,y{m,n}},{p,q}}",
    ];
    const outputs = [
        ["a", "b"],
        ["ac", "ad", "ae", "bc", "bd", "be"],
        ["a", "ab", "ac", "z"],
        ["acdf", "acef", "bcdf", "bcef"],
        ["abcd"],
        ["a", "b", "c"],
        ["zabcdea", "zabcdeb", "zabcdec"],
        ["zab"],
        ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"],
        ["ac", "ad", "ae", "bc", "bd", "be"],
        ["ac", "ad", "ae", "bc", "bd", "be", "z"],
        ["abcx", "abcym", "abcyn", "p", "q"],
    ];
    assertEquals(inputs.map(braceExpansionII), outputs);
});
