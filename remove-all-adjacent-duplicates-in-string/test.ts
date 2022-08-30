import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import removeDuplicates from "./index.ts";
Deno.test("remove-all-adjacent-duplicates-in-string", () => {
    assertEquals(["abbaca", "azxxzy"].map(removeDuplicates), ["ca", "ay"]);
});
