import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import { TreeNodeLeetCodeParse } from "../mod.ts";
import deepestLeavesSum from "./index.ts";

Deno.test("deepest-leaves-sum", () => {
    const inputs = [
        "[1,2,3,4,5,null,6,7,null,null,null,null,8]",
        "[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]",
    ];
    const outputs = [15, 19];
    assertEquals(
        inputs.map((input) => {
            return deepestLeavesSum(TreeNodeLeetCodeParse(input));
        }),
        outputs,
    );
});
