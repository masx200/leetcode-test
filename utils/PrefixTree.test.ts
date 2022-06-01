import { assertEquals } from "../deps.ts";
import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeToArray1 } from "./PrefixTreeToArray1.ts";
import { examples } from "./examples.ts";
import { PrefixTreeClear } from "./PrefixTreeClear.ts";
import { PrefixTreeFromArray } from "./PrefixTreeFromArray.ts";
import { PrefixTreeForEach } from "./PrefixTreeForEach.ts";
// import { PrefixTreeToArray2 } from "./PrefixTreeToArray2.ts";

Deno.test("Prefix-Tree-from-array-for-each-PrefixTreeToArray1", () => {
    const words = [
        "1",
        "32",
        "123",
        "21",
        "222",
        "132",
        "111",
        "312",
        "hello",
        "world",
        "ffff",
    ];
    const tree = PrefixTreeFromArray(words);

    const left = new Set(words);
    const right = new Set(PrefixTreeToArray1(tree));
    // console.log(left, right);
    assertEquals(left, right);
    const temp: string[] = [];
    PrefixTreeForEach(tree, (w) => temp.push(w));
    assertEquals(left, new Set(temp));
});
Deno.test("Prefix-Tree-Insert-PrefixTreeToArray1-clear", () => {
    const words = examples;
    const tree = PrefixTree();
    words.forEach((word) => PrefixTreeInsert(tree, word));
    const left = new Set(words);
    const right = new Set(PrefixTreeToArray1(tree));
    // console.log(left, right);
    assertEquals(left, right);
    assertEquals([], PrefixTreeToArray1(PrefixTree()));
    PrefixTreeClear(tree);
    assertEquals([], PrefixTreeToArray1(tree));
});
// Deno.test("Prefix-Tree-Insert-PrefixTreeToArray2-clear", () => {
//     const words = examples;
//     const tree = PrefixTree();
//     words.forEach((word) => PrefixTreeInsert(tree, word));
//     const left = new Set(words);
//     const right = new Set(PrefixTreeToArray2(tree));
//     // console.log(left, right);
//     assertEquals(left, right);
//     assertEquals([], PrefixTreeToArray2(PrefixTree()));
//     PrefixTreeClear(tree);
//     assertEquals([], PrefixTreeToArray2(tree));
// });
