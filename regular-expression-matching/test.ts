import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import isMatch from "./index.ts";

Deno.test("regular-expression-matching", () => {
    const inputs = [
        ["aaa", "a.a"],
        ["ab", ".*c"],
        ["mississippi", "mis*is*ip*."],
        ["a", ".*..a*"],
        ["aa", "a"],
        ["aa", "a*"],
        ["ab", ".*"],
    ];
    const outputs = [true, false, true, false, false, true, true];
    assertEquals(inputs.map((input) => isMatch(input[0], input[1])), outputs);
});
