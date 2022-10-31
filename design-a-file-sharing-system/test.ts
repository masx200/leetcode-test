import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";

import FileSharing from "./index.ts";

Deno.test("design-a-file-sharing-system", () => {
    assertEquals(
        runScript(
            [
                "FileSharing",
                "join",
                "join",
                "join",
                "request",
                "request",
                "leave",
                "request",
                "leave",
                "join",
            ],
            [
                [4],
                [[1, 2]],
                [[2, 3]],
                [[4]],
                [1, 3],
                [2, 2],
                [1],
                [2, 1],
                [2],
                [[]],
            ],
            FileSharing,
        ),
        [null, 1, 2, 3, [2], [1, 2], null, [], null, 1],
    );
});
