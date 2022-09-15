import { assertEquals } from "asserts";

import parseTernary from "./index.ts";

Deno.test("ternary-expression-parser", () => {
    assertEquals(["T?2:3", "F?1:T?4:5", "T?T?F:5:3", "8"].map(parseTernary), [
        "2",
        "4",
        "F",
        "8",
    ]);
});
