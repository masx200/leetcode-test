import { assertEquals } from "../deps.ts";
import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeTraverse } from "./PrefixTreeTraverse.ts";
import { examples } from "./examples.ts";

Deno.test("Prefix-Tree-Insert-Traverse", () => {
    const words = examples;
    const tree = PrefixTree();
    words.forEach((word) => PrefixTreeInsert(tree, word));
    const left = new Set(words);
    const right = new Set(PrefixTreeTraverse(tree));
    // console.log(left, right);
    assertEquals(left, right);
    assertEquals([], PrefixTreeTraverse(PrefixTree()));
});
