import { assertEquals } from "asserts";

import solution from "./index.ts";

Deno.test("first-bad-version", () => {
    const input: [number, number] = [5, 4];
    assertEquals(4, solution((v) => v === input[1])(input[0]));
});
Deno.test("first-bad-version", () => {
    const input: [number, number] = [1, 1];
    assertEquals(1, solution((v) => v === input[1])(input[0]));
});
