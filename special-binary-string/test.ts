import { assertEquals } from "asserts";

import makeLargestSpecial from "./index.ts";

Deno.test("special-binary-string", () => {
    const inputs = ["11011000", "10"];
    const outputs = ["11100100", "10"];
    assertEquals(outputs, inputs.map(makeLargestSpecial));
});
