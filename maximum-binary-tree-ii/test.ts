import { assertEquals } from "../deps.ts";
import { TreeNodeLeetCodeParse } from "../mod.ts";
import constructMaximumBinaryTreeII from "./index.ts";

Deno.test("maximum-binary-tree-ii", () => {
    const inputs: Array<[(number | null)[], number]> = [
        [[4, 1, 3, null, null, 2], 5],
        [[5, 2, 4, null, 1], 3],
        [[5, 2, 3, null, 1], 4],
    ];
    const outputs = [
        [5, 4, null, 1, 3, null, null, 2],
        [5, 2, 4, null, 1, null, 3],
        [5, 2, 4, null, 1, 3],
    ];
    assertEquals(
        inputs.map(([input, k]) =>
            constructMaximumBinaryTreeII(
                TreeNodeLeetCodeParse(JSON.stringify(input)),
                k,
            )
        ),
        outputs.map((a) => TreeNodeLeetCodeParse(JSON.stringify(a))),
    );
});
