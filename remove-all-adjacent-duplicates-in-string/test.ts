import { assertEquals } from "asserts";

import removeDuplicates from "./index.ts";

Deno.test("remove-all-adjacent-duplicates-in-string", () => {
    assertEquals(["abbaca", "azxxzy"].map(removeDuplicates), ["ca", "ay"]);
});
