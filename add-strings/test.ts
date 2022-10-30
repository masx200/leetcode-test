import { assertEquals } from "asserts";

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
