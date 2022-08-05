import { assertEquals } from "https://deno.land/std@0.150.0/testing/asserts.ts";
import mergeAlternately from "./index.ts";
Deno.test("merge-strings-alternately", () => {
    const inputs = [
        ["abc", "pqr"],
        ["ab", "pqrs"],
        ["abcd", "pq"],
    ];
    const outputs = ["apbqcr", "apbqrs", "apbqcd"];
    assertEquals(
        outputs,
        inputs.map((input) => mergeAlternately(input[0], input[1])),
    );
});
