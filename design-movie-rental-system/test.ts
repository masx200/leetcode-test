import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
import MovieRentingSystem from "./index.ts";
Deno.test("design-movie-rental-system", () => {
    assertEquals(
        runScript([
            "MovieRentingSystem",
            "search",
            "rent",
            "rent",
            "report",
            "drop",
            "search",
        ], [
            [3, [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [
                2,
                1,
                5,
            ]]],
            [1],
            [0, 1],
            [1, 2],
            [],
            [1, 2],
            [2],
        ], MovieRentingSystem),
        [null, [1, 0, 2], null, null, [[0, 1], [1, 2]], null, [0, 1]],
    );
});
