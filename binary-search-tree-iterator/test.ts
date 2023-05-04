import { assertEquals } from "asserts";

import { runScript } from "../deps.ts";
import { TreeNodeLeetCodeFromJSON } from "../utils/TreeNodeLeetCodeParse.ts";
import BSTIterator from "./index.ts";

Deno.test("binary-search-tree-iterator", () => {
    assertEquals(
        [null, 3, 7, true, 9, true, 15, true, 20, false],
        runScript(
            [
                "BSTIterator",
                "next",
                "next",
                "hasNext",
                "next",
                "hasNext",
                "next",
                "hasNext",
                "next",
                "hasNext",
            ],
            [
                [TreeNodeLeetCodeFromJSON([7, 3, 15, null, null, 9, 20])],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ],
            BSTIterator,
        ),
    );
});
Deno.test("binary-search-tree-iterator", () => {
    const iterator = new BSTIterator(
        TreeNodeLeetCodeFromJSON([7, 3, 15, null, null, 9, 20]),
    );

    const res: number[] = [];
    while (iterator.hasNext()) {
        res.push(iterator.next() as number);
    }
    assertEquals([3, 7, 9, 15, 20], res);
});
