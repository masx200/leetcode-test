import { assertEquals } from "https://deno.land/std@0.157.0/testing/asserts.ts";
import expand from "./index.ts";
Deno.test("brace-expansion", () => {
    const inputs = ["{a,b}c{d,e}f", "abcd"];
    const outputs = [["acdf", "acef", "bcdf", "bcef"], ["abcd"]];
    assertEquals(inputs.map(expand), outputs);
});
