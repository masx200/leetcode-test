import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import isCompleteTree from "./index.ts";
import { TreeNodeLeetCodeParse as deserialize } from "../utils/TreeNodeLeetCodeParse.ts";
Deno.test("check-completeness-of-a-binary-tree", () => {
    const inputs = [
        "[1,2,3,4,5,6]",
        "[1,2,3,4,5,null,7]",
        "[1,2,3,5,null,7,8]",
        "[1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,15]",
        "[1,2,3,4,5,6]",
        "[1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,15]",
    ];
    const outputs = [true, false, false, false, true, false];
    assertEquals(
        inputs.map((input) => {
            const root = deserialize(input);
            return isCompleteTree(root);
        }),
        outputs
    );
});
