import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

import { sum } from "../richest-customer-wealth/sum.ts";
import groupThePeople from "./index.ts";

Deno.test("group-the-people-given-the-group-size-they-belong-to", () => {
    const inputs = [
        [3, 3, 3, 3, 3, 1, 3],
        [2, 1, 3, 3, 3, 2],
    ];
    const results = inputs.map(groupThePeople);

    results.forEach((result, i) => {
        const input = inputs[i];
        // console.log(`input: ${inputs[i]}`);
        // console.log(`result: ${result}`);

        assertEquals(input.length, sum(result.map((a) => a.length)));

        for (const arr of result) {
            for (const i of arr) {
                assertEquals(arr.length, input[i]);
            }
        }
    });
});
Deno.test("group-the-people-given-the-group-size-they-belong-to", () => {
    const inputs = [
        [3, 3, 3, 3, 3, 1, 3],
        [2, 1, 3, 3, 3, 2],
    ];
    const results = [
        [[5], [0, 1, 2], [3, 4, 6]],
        [[1], [0, 5], [2, 3, 4]],
    ];

    results.forEach((result, i) => {
        const input = inputs[i];
        // console.log(`input: ${inputs[i]}`);
        // console.log(`result: ${result}`);

        assertEquals(input.length, sum(result.map((a) => a.length)));

        for (const arr of result) {
            for (const i of arr) {
                assertEquals(arr.length, input[i]);
            }
        }
    });
});
