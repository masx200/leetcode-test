Deno.test("implement-trie-ii-prefix-tree", () => {
    const trie: Trie = new Trie();
    trie.insert("apple"); // Inserts "apple".
    trie.insert("apple"); // Inserts another "apple".
    assertEquals(2, trie.countWordsEqualTo("apple")); // There are two instances of "apple" so return 2.
    assertEquals(2, trie.countWordsStartingWith("app")); // "app" is a prefix of "apple" so return 2.
    trie.erase("apple"); // Erases one "apple".
    assertEquals(1, trie.countWordsEqualTo("apple")); // Now there is only one instance of "apple" so return 1.
    assertEquals(1, trie.countWordsStartingWith("app")); // return 1
    trie.erase("apple"); // Erases "apple". Now the trie is empty.
    assertEquals(0, trie.countWordsStartingWith("app")); // return 0
});
import { assertEquals } from "../deps.ts";
import Trie from "./index.ts";
