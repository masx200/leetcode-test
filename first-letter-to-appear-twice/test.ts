import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import repeatedCharacter from "./index.ts";

Deno.test("first-letter-to-appear-twice", () => {
    const inputs = ["abccbaacz", "abcdd", "yyabccbaacz", "yyabcdd"];
    const outputs = ["c", "d", "y", "y"];
    assertEquals(outputs, inputs.map(repeatedCharacter));
});
