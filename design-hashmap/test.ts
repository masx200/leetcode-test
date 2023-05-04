import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";

import MyHashMap from "./index.ts";

Deno.test("design-hashmap", () => {
    assertEquals(
        runScript(
            [
                "MyHashMap",
                "put",
                "put",
                "get",
                "get",
                "put",
                "get",
                "remove",
                "get",
            ],
            [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]],
            MyHashMap,
        ),
        [null, null, null, 1, -1, null, 1, null, -1],
    );
});
