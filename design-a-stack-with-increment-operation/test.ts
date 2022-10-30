import { runScript } from 'leetcode-class';

import { assertEquals } from '../deps.ts';
import CustomStack from './index.ts';

Deno.test("design-a-stack-with-increment-operation", () => {
    const e: any[][] = [
        [[
            "CustomStack",
            "push",
            "push",
            "pop",
            "push",
            "push",
            "push",
            "increment",
            "increment",
            "pop",
            "pop",
            "pop",
            "pop",
        ], [
            [3],
            [1],
            [2],
            [],
            [2],
            [3],
            [4],
            [5, 100],
            [2, 100],
            [],
            [],
            [],
            [],
        ]],
        [[
            "CustomStack",
            "push",
            "pop",
            "increment",
            "pop",
            "increment",
            "push",
            "pop",
            "push",
            "increment",
            "increment",
            "increment",
        ], [[2], [34], [], [8, 100], [], [9, 91], [63], [], [84], [10, 93], [
            6,
            45,
        ], [10, 4]]],
    ];
    assertEquals(e.map((a) => runScript(a[0], a[1], [CustomStack])), [[
        null,
        null,
        null,
        2,
        null,
        null,
        null,
        null,
        null,
        103,
        202,
        201,
        -1,
    ], [null, null, 34, null, -1, null, null, 63, null, null, null, null]]);
});
