import { assertEquals } from "asserts";

import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import mergeInBetween from "./index.ts";

Deno.test("merge-in-between-linked-lists", () => {
    const inputs: [
        list1: number[],
        a: number,
        b: number,
        list2: number[],
    ][] = [
        [[0, 1, 2, 3, 4, 5], 3, 4, [1000000, 1000001, 1000002]],
        [[0, 1, 2, 3, 4, 5, 6], 2, 5, [
            1000000,
            1000001,
            1000002,
            1000003,
            1000004,
        ]],
    ];
    const outputs = [[0, 1, 2, 1000000, 1000001, 1000002, 5], [
        0,
        1,
        1000000,
        1000001,
        1000002,
        1000003,
        1000004,
        6,
    ]];

    for (const [i, [o, a, b, t]] of inputs.entries()) {
        assertEquals(
            mergeInBetween(ArrayToListNode(o), a, b, ArrayToListNode(t)),
            ArrayToListNode(outputs[i]),
        );
    }
});
