import { assertEquals } from "asserts";
import isStrobogrammatic from "./index.ts";
Deno.test("strobogrammatic-number", () => {
    assertEquals(["69", "88", "962"].map(isStrobogrammatic), [
        true,
        true,
        false,
    ]);
});
