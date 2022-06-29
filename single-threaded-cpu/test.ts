import { assertEquals } from "../deps.ts";
import getOrder from "./index.ts";

Deno.test("single-threaded-cpu", () => {
    assertEquals(
        [4, 3, 2, 0, 1],
        getOrder([
            [7, 10],
            [7, 12],
            [7, 5],
            [7, 4],
            [7, 2],
        ]),
    );
    assertEquals(
        [0, 2, 3, 1],
        getOrder([
            [1, 2],
            [2, 4],
            [3, 2],
            [4, 1],
        ]),
    );
});
