import { assertEquals } from "https://deno.land/std@0.155.0/testing/asserts.ts";

import { default as TreeBuilder } from "./index.ts";

Deno.test("design-an-expression-tree-with-evaluate-function", () => {
    assertEquals(
        [
            ["2", "1", "+", "3", "*"],
            ["4", "13", "5", "/", "+"],
            [
                "10",
                "6",
                "9",
                "3",
                "+",
                "-11",
                "*",
                "/",
                "*",
                "17",
                "+",
                "5",
                "+",
            ],
            ["3", "4", "+", "2", "*", "7", "/"],
            ["4", "5", "7", "2", "+", "-", "*"],
            ["4", "2", "+", "3", "5", "1", "-", "*", "+"],
            ["100", "200", "+", "2", "/", "5", "*", "7", "+"],
        ].map((postfix) => {
            const obj = new TreeBuilder();
            const expTree = obj.buildTree(postfix);
            const ans = expTree.evaluate();
            return ans;
        }),
        [9, 6, 22, 2, -16, 18, 757],
    );
});
