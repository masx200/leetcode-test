import { assertEquals } from "asserts";

import getAllElements from "./index.ts";

Deno.test("all-elements-in-two-binary-search-trees", () => {
    const inputs = [
        [
            {
                val: 2,
                left: { val: 1, left: null, right: null },
                right: { val: 4, left: null, right: null },
            },
            {
                val: 1,
                left: { val: 0, left: null, right: null },
                right: { val: 3, left: null, right: null },
            },
        ],
        [
            { val: 1, left: null, right: { val: 8, left: null, right: null } },
            { val: 8, left: { val: 1, left: null, right: null }, right: null },
        ],
    ];
    const outputs = [
        [0, 1, 1, 2, 3, 4],
        [1, 1, 8, 8],
    ];
    assertEquals(
        outputs,
        inputs.map(([root1, root2]) => getAllElements(root1, root2)),
    );
});
