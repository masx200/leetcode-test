import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";

import busiestServers from "./index.ts";

Deno.test("find-servers-that-handled-most-number-of-requests", () => {
    assertEquals(
        [
            [3, [1, 2, 3, 4, 5], [5, 2, 3, 3, 3]],
            [3, [1, 2, 3, 4], [1, 2, 1, 2]],
            [3, [1, 2, 3], [10, 12, 11]],
            [
                7,
                [1, 3, 4, 5, 6, 11, 12, 13, 15, 19, 20, 21, 23, 25, 31, 32],
                [9, 16, 14, 1, 5, 15, 6, 10, 1, 1, 7, 5, 11, 4, 4, 6],
            ],
            [1, [1], [1]],
            [3, [1, 2, 3, 4, 8, 9, 10], [5, 2, 10, 3, 1, 2, 2]],
        ].map((a) => Reflect.apply(busiestServers, null, a)),
        [[1], [0], [0, 1, 2], [0], [0], [1]],
    );
});
