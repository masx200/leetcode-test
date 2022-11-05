import { assertEquals } from "https://deno.land/std@0.162.0/testing/asserts.ts";

import expand from "./index.ts";

Deno.test("brace-expansion", () => {
    const inputs = [
        "{a,b}c{d,e}f",
        "abcd",
        "abc{x,y,m,n,p,q}",
        "{x,y,m,n,p,q}",
    ];
    const outputs = [
        ["acdf", "acef", "bcdf", "bcef"],
        ["abcd"],
        ["abcm", "abcn", "abcp", "abcq", "abcx", "abcy"],
        ["m", "n", "p", "q", "x", "y"],
    ];
    assertEquals(inputs.map(expand), outputs);
});
