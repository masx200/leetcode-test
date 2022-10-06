import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import stringMatching from "./index.ts";

Deno.test("string-matching-in-an-array", () => {
    const inputs = [["mass", "as", "hero", "superhero"], [
        "leetcode",
        "et",
        "code",
    ], ["blue", "green", "bu"]];
    const outputs = [["as", "hero"], ["et", "code"], []];
    assertEquals(inputs.map(stringMatching), outputs);
});
