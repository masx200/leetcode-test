import { assertEquals } from "asserts";

import repeatedCharacter from "./index.ts";

Deno.test("first-letter-to-appear-twice", () => {
    const inputs = ["abccbaacz", "abcdd", "yyabccbaacz", "yyabcdd"];
    const outputs = ["c", "d", "y", "y"];
    assertEquals(outputs, inputs.map(repeatedCharacter));
});
