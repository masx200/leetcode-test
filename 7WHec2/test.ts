import { assertEquals } from "../deps.ts";
import { ArrayToListNode, ListNodeToArray } from "../mod.ts";
import sortList from "./index.ts";

Deno.test("sort-list-2", () => {
    const inputs = [
        [4, 2, 1, 3],
        [-1, 5, 3, 4, 0],
        [],
        Array.from({ length: 50 }).map((_v, i) => i),
    ];
    const outputs = [
        [1, 2, 3, 4],
        [-1, 0, 3, 4, 5],
        [],
        Array.from({ length: 50 }).map((_v, i) => i),
    ];
    const examples: {
        input: number[];
        output: number[];
    }[] = inputs.map((v, i) => ({ input: v, output: outputs[i] }));
    examples.forEach(({ input, output }) => {
        assertEquals(output, ListNodeToArray(sortList(ArrayToListNode(input))));
    });
});
