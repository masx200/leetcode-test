import { assertEquals } from "../deps.ts";
import { TreeNodeLeetCodeParse } from "../mod.ts";
import kthLargest from "./index.ts";

Deno.test("er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof", () => {
    assertEquals(
        4,
        kthLargest(
            TreeNodeLeetCodeParse("[5,3,6,2,4,null,null,1]"),
            3,
        ),
    );
    assertEquals(
        4,
        kthLargest(TreeNodeLeetCodeParse(" [3,1,4,null,2]"), 1),
    );
});
