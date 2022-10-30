import { assertEquals } from "asserts";

import { runScript } from "../deps.ts";
import { TreeNodeLeetCodeFromJSON } from "../utils/TreeNodeLeetCodeParse.ts";
import BSTIterator from "./index.ts";

Deno.test("binary-search-tree-iterator-ii", () => {
    assertEquals(
        [null, 3, 7, 3, 7, true, 9, 15, 20, false, true, 15, 9],
        runScript([
            "BSTIterator",
            "next",
            "next",
            "prev",
            "next",
            "hasNext",
            "next",
            "next",
            "next",
            "hasNext",
            "hasPrev",
            "prev",
            "prev",
        ], [
            [TreeNodeLeetCodeFromJSON([7, 3, 15, null, null, 9, 20])],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
        ], [BSTIterator]),
    );
});
Deno.test("binary-search-tree-iterator-ii", () => {
    const iterator = new BSTIterator(
        TreeNodeLeetCodeFromJSON([7, 3, 15, null, null, 9, 20]),
    );

    const res: number[] = [];
    while (iterator.hasNext()) {
        res.push(iterator.next() as number);
    }
    assertEquals([3, 7, 9, 15, 20], res);
});
