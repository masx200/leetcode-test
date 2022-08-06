import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";
import validSquare from "./index.ts";
Deno.test("valid-square", () => {
    const p1 = [0, 0],
        p2 = [1, 1],
        p3 = [1, 0],
        p4 = [0, 1];

    assertEquals(true, validSquare(p1, p2, p3, p4));
});
Deno.test("valid-square", () => {
    const p1 = [0, 0],
        p2 = [1, 1],
        p3 = [1, 0],
        p4 = [0, 12];
    assertEquals(false, validSquare(p1, p2, p3, p4));
});
Deno.test("valid-square", () => {
    const p1 = [1, 0],
        p2 = [-1, 0],
        p3 = [0, 1],
        p4 = [0, -1];

    assertEquals(true, validSquare(p1, p2, p3, p4));
});
