import { assertEquals } from "../deps.ts";
import { TrieNode } from "../implement-trie-ii-prefix-tree/TrieNode.ts";
import { TrieNodeInsert } from "../implement-trie-ii-prefix-tree/TrieNodeInsert.ts";
import { TrieNodeClear } from "./TrieNodeClear.ts";
import { TrieNodeForEach } from "./TrieNodeForEach.ts";

Deno.test("TrieNode-for-each-Insert-clear", () => {
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
        "world",
        "world",
        "ffff",
        "ffff",
        "ffff",
        "ffff",
        "ffff",
    ];
    const tree = new TrieNode();
    words.forEach((word) => TrieNodeInsert(tree, word));
    const left = Array.from(words);

    const temp: string[] = [];
    TrieNodeForEach(tree, (w) => temp.push(w));
    assertEquals(Array.from(left).sort(), Array.from(temp).sort());

    TrieNodeClear(tree);
    const empty: string[] = [];
    TrieNodeForEach(tree, (w) => empty.push(w));
    assertEquals([], empty);
});
