import Trie from "./index.ts";
Deno.test("implement-trie-prefix-tree", () => {
    const trie = Trie();
    trie.insert("apple");
    assertEquals(true, trie.search("apple")); // 返回 True
    assertEquals(false, trie.search("app")); // 返回 False
    assertEquals(true, trie.startsWith("app")); // 返回 True
    trie.insert("app");
    assertEquals(true, trie.search("app"));
});
import { assertEquals } from "../deps.ts";
