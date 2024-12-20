import { assertEquals } from "asserts";

import removeStones from "./index.ts";

Deno.test("most-stones-removed-with-same-row-or-column", () => {
    assertEquals(
        5,
        removeStones([
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 2],
            [2, 1],
            [2, 2],
        ]),
    );
    assertEquals(0, removeStones([[0, 0]]));
    assertEquals(
        2,
        removeStones([
            [0, 1],
            [1, 0],
            [1, 1],
        ]),
    );
    assertEquals(
        3,
        removeStones([
            [0, 0],
            [0, 2],
            [1, 1],
            [2, 0],
            [2, 2],
        ]),
    );
});
