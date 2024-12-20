import { assertEquals } from "asserts";

import { TreeNodeLeetCodeFromJSON } from "../utils/TreeNodeLeetCodeParse.ts";
import getNumber from "./index.ts";

Deno.test("QO5KpG", () => {
    assertEquals(
        2,
        getNumber(
            TreeNodeLeetCodeFromJSON([1, null, 2, null, 3, null, 4, null, 5]),
            [
                [1, 2, 4],
                [1, 1, 3],
                [0, 3, 5],
            ],
        ),
    );
    assertEquals(
        5,
        getNumber(
            TreeNodeLeetCodeFromJSON([
                4,
                2,
                7,
                1,
                null,
                5,
                null,
                null,
                null,
                null,
                6,
            ]),
            [
                [0, 2, 2],
                [1, 1, 5],
                [0, 4, 5],
                [1, 5, 7],
            ],
        ),
    );
});
