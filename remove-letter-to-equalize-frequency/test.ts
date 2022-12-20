import { assertEquals } from "asserts";

import equalFrequency from "./index.ts";

Deno.test("remove-letter-to-equalize-frequency", () => {
    assertEquals(["abcc", "aazz"].map(equalFrequency), [true, false]);
});
