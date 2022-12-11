import { assertEquals } from "asserts";

import getAncestors from "./index.ts";

Deno.test("all-ancestors-of-a-node-in-a-directed-acyclic-graph", () => {
    const outputs = [
        [[], [], [], [0, 1], [0, 2], [0, 1, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3]],
        [[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]],
    ];
    const inputs = [
        [
            8,
            [
                [0, 3],
                [0, 4],
                [1, 3],
                [2, 4],
                [2, 7],
                [3, 5],
                [3, 6],
                [3, 7],
                [4, 6],
            ],
        ],
        [
            5,
            [
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [1, 2],
                [1, 3],
                [1, 4],
                [2, 3],
                [2, 4],
                [3, 4],
            ],
        ],
    ] as Array<Parameters<typeof getAncestors>>;
    assertEquals(
        outputs,
        inputs.map(([n, edges]) => getAncestors(n, edges))
    );
});
