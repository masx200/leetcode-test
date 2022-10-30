import { ImmutableListNode } from "./ImmutableListNode.ts";
import printLinkedListInReverse from "./index.ts";
import { assertEquals } from "asserts";

Deno.test("print-immutable-linked-list-in-reverse", () => {
    const cases = [
        [
            [1, 2, 3, 4],
            [4, 3, 2, 1],
        ],
        [
            [0, -4, -1, 3, -5],
            [-5, 3, -1, -4, 0],
        ],
        [
            [-2, 0, 6, 4, 4, -6],
            [-6, 4, 4, 6, 0, -2],
        ],
    ];
    cases.forEach(([input, output]) => {
        const result: number[] = [];
        const node = new ImmutableListNode(input, (v) => result.push(v));
        printLinkedListInReverse(node);

        assertEquals(output, result);
    });
});
