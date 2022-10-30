import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
import FileSystem from "./index.ts";
Deno.test("design-in-memory-file-system", () => {
    assertEquals(
        runScript(
            [
                "FileSystem",
                "ls",
                "mkdir",
                "addContentToFile",
                "ls",
                "readContentFromFile",
                "ls",
                "mkdir",
                "ls",
            ],
            [
                [],
                ["/"],
                ["/a/b/c"],
                ["/a/b/c/d", "hello"],
                ["/"],
                ["/a/b/c/d"],
                ["/a/b/c/d"],
                ["/a/b/c/e"],
                ["/a/b/c"],
            ],
            FileSystem,
        ),
        [null, [], null, null, ["a"], "hello", ["d"], null, ["d", "e"]],
    );
});
