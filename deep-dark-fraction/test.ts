import { assertEquals } from "asserts";

import fraction from "./index.ts";

Deno.test("deep-dark-fraction", () => {
    assertEquals(
        [[3, 2, 0, 2], [0, 0, 3], [3, 3], [7, 7], [0, 0, 7], [
            2,
            7,
            8,
            4,
            2,
            1,
            5,
            8,
            4,
            9,
        ]].map(fraction),
        [[13, 4], [3, 1], [10, 3], [50, 7], [7, 1], [2891662, 1350979]],
    );
});
