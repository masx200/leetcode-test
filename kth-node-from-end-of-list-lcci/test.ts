import { assertEquals } from "../deps.ts";
import { ArrayToListNode } from "../mod.ts";
import kth_node_from_end_of_list_lcci from "./index.ts";

Deno.test("kth-node-from-end-of-list-lcci", () => {
    const examples: {
        input: [number[], number];
        output: number;
    }[] = [
        { input: [[1, 2, 3, 4, 5], 2], output: 4 },
        { input: [[1, 2, 3, 4, 5], 1], output: 5 },
        { input: [[1, 2, 3, 4, 5], 3], output: 3 },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(
            output,
            kth_node_from_end_of_list_lcci(ArrayToListNode(input[0]), input[1]),
        );
    });
});
