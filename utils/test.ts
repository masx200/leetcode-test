import { assertEquals } from "../deps.ts";
import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeToArray } from "./PrefixTreeToArray.ts";
import { examples } from "./examples.ts";
import { PrefixTreeClear } from "./PrefixTreeClear.ts";
import { PrefixTreeFromArray } from "./PrefixTreeFromArray.ts";
import { PrefixTreeForEach } from "./PrefixTreeForEach.ts";

Deno.test("Prefix-Tree-from-array-for-each", () => {
    const words = [
        1,
        32,
        123,
        21,
        222,
        132,
        111,
        312,
        "hello",
        "world",
        "ffff",
    ].map((v) => String(v));
    const tree = PrefixTreeFromArray(words);

    const left = new Set(words);
    const right = new Set(PrefixTreeToArray(tree));
    // console.log(left, right);
    assertEquals(left, right);
    const temp: string[] = [];
    PrefixTreeForEach(tree, (w) => temp.push(w));
    assertEquals(left, new Set(temp));
});
Deno.test("Prefix-Tree-Insert-PrefixTreeToArray-clear", () => {
    const words = examples;
    const tree = PrefixTree();
    words.forEach((word) => PrefixTreeInsert(tree, word));
    const left = new Set(words);
    const right = new Set(PrefixTreeToArray(tree));
    // console.log(left, right);
    assertEquals(left, right);
    assertEquals([], PrefixTreeToArray(PrefixTree()));
    PrefixTreeClear(tree);
    assertEquals([], PrefixTreeToArray(tree));
});
