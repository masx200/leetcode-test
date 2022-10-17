import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";
import equalFrequency from "./index.ts";
Deno.test("remove-letter-to-equalize-frequency", () => {
    assertEquals(["abcc", "aazz"].map(equalFrequency), [true, false]);
});
