import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
import MyHashSet from "./index.ts";
Deno.test("design-hashset", () => {
    assertEquals(
        runScript(
            [
                "MyHashSet",
                "add",
                "add",
                "contains",
                "contains",
                "add",
                "contains",
                "remove",
                "contains",
            ],
            [[], [1], [2], [1], [3], [2], [2], [2], [2]],
            [MyHashSet],
        ),
        [null, null, null, true, false, null, true, null, false],
    );
});
