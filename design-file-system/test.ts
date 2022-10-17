import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";
import { runScript } from "leetcode-class";
import FileSystem from "./index.ts";
Deno.test("design-file-system", () => {
    assertEquals(
        runScript(
            ["FileSystem", "createPath", "get"],
            [[], ["/a", 1], ["/a"]],
            FileSystem,
        ),
        [null, true, 1],
    );
});
Deno.test("design-file-system", () => {
    assertEquals(
        runScript(
            [
                "FileSystem",
                "createPath",
                "createPath",
                "get",
                "createPath",
                "get",
            ],
            [
                [],
                ["/leet", 1],
                ["/leet/code", 2],
                ["/leet/code"],
                ["/c/d", 1],
                ["/c"],
            ],
            FileSystem,
        ),
        [null, true, true, 2, false, -1],
    );
});
