import { assertEquals } from "../deps.ts";
import { TreeNodeLeetCodeStringify } from "../mod.ts";
import constructMaximumBinaryTree from "./index.ts";

Deno.test("maximum-binary-tree", () => {
    const inputs = [
        [3, 2, 1, 6, 0, 5],
        [3, 2, 1],
    ];
    const outputs = [
        [6, 3, 5, null, 2, 0, null, null, 1],
        [3, null, 2, null, 1],
    ];
    assertEquals(
        inputs
            .map((input) => constructMaximumBinaryTree(input))
            .map((a) => TreeNodeLeetCodeStringify(a)),
        outputs.map((a) => JSON.stringify(a)),
    );
});
