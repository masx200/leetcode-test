Deno.test("remove-9", () => {
    assertEquals(
        [1, 2, 3, 4, 5, 6, 7, 8, 10, 11],
        [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
        ].map(solution),
    );
});

import { assertEquals } from "asserts";

import solution from "./index.ts";
