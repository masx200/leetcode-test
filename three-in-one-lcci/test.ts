import { assertEquals } from "asserts";
import TripleInOne from "./index.ts";

Deno.test("three-in-one-lcci", () => {
    const tio = new TripleInOne(1);
    tio.push(0, 1);
    tio.push(0, 2);
    assertEquals(1, tio.pop(0));
    assertEquals(-1, tio.pop(0));
    assertEquals(-1, tio.pop(0));
    assertEquals(true, tio.isEmpty(0));
});
