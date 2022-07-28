import { assertEquals } from "../deps.ts";
import arrayRankTransform from "./index.ts";

Deno.test("rank-transform-of-an-array", () => {
    assertEquals(arrayRankTransform([100, 100, 100]), [1, 1, 1]);
    assertEquals(
        arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]),
        [5, 3, 4, 2, 8, 6, 7, 1, 3],
    );
    assertEquals(arrayRankTransform([40, 10, 20, 30]), [4, 1, 2, 3]);
    assertEquals(arrayRankTransform([1, 2, 3, 4]), [1, 2, 3, 4]);
    assertEquals(arrayRankTransform([1, 3, 5, 7]), [1, 2, 3, 4]);
    assertEquals(arrayRankTransform([1, 5, 10, 100]), [1, 2, 3, 4]);

    assertEquals(arrayRankTransform([1, 1, 1, 1]), [1, 1, 1, 1]);
    assertEquals(
        arrayRankTransform([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    );

    assertEquals(
        arrayRankTransform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    );

    assertEquals(
        arrayRankTransform([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),
        [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    );
    assertEquals(
        arrayRankTransform([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]),
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    );
    assertEquals(
        arrayRankTransform([
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
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
        ]),
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    );
});
