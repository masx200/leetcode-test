import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import addStrings from "./index.ts";
Deno.test("add-strings", () => {
    const outputs = ["134", "533", "0"];

    const inputs = [
        ["11", "123"],
        ["456", "77"],
        ["0", "0"],
    ];
    assertEquals(outputs, inputs.map(([x, y]) => addStrings(x, y)));
});
