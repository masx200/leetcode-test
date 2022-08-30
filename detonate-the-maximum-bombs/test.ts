import { assertEquals } from "asserts";
import maximumDetonation from "./index.ts";
Deno.test("detonate-the-maximum-bombs", () => {
    assertEquals(
        [2, 1, 5],
        [
            [
                [2, 1, 3],
                [6, 1, 4],
            ],
            [
                [1, 1, 5],
                [10, 10, 5],
            ],
            [
                [1, 2, 3],
                [2, 3, 1],
                [3, 4, 2],
                [4, 5, 3],
                [5, 6, 4],
            ],
        ].map(maximumDetonation),
    );
});
