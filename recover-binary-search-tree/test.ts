import { assertEquals } from "asserts";
import { TreeNodeLeetCodeFromJSON } from "../utils/TreeNodeLeetCodeParse.ts";
import recoverTree from "./index.ts";
import { TreeNodeLeetCodeToJSON } from "../utils/TreeNodeLeetCodeStringify.ts";
Deno.test("recover-binary-search-tree", () => {
    const examples = [
        [
            [1, 3, null, null, 2],
            [3, 1, null, null, 2],
        ],
        [
            [3, 1, 4, null, null, 2],
            [2, 1, 4, null, null, 3],
        ],
    ];

    for (const [input, output] of examples) {
        const root = TreeNodeLeetCodeFromJSON(input);

        recoverTree(root);
        assertEquals(output, TreeNodeLeetCodeToJSON(root));
    }
});
