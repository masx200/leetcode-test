import { assertEquals } from "../deps.ts";
import { PrefixTreeInsert } from "../design-add-and-search-words-data-structure/PrefixTreeInsert.ts";
import { PrefixTree } from "../implement-trie-prefix-tree/PrefixTree.ts";
import { PrefixTreeTraverse } from "./PrefixTreeTraverse.ts";
import { test_words } from "./test_words.ts";

Deno.test("Prefix-Tree", () => {
    const words = test_words;
    const tree = PrefixTree();
    words.forEach((word) => PrefixTreeInsert(tree, word));
    const left = new Set(words);
    const right = new Set(PrefixTreeTraverse(tree));
    // console.log(left, right);
    assertEquals(left, right);
});
