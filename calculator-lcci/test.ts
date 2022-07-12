import { assertEquals } from "../deps.ts";
import calculate from "./index.ts";
Deno.test("calculator-lcci", () => {
    assertEquals(calculate("3+2*2"), 7);
    assertEquals(calculate("3/2"), 1);
    assertEquals(calculate(" 3+5 / 2 "), 5);
});
