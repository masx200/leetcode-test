import { assertEquals } from "https://deno.land/std@0.157.0/testing/asserts.ts";

import validPath from "./index.ts";
import validPath2 from "./validPath.ts";

Deno.test("find-if-path-exists-in-graph", () => {
    testValidPath(validPath);
});
Deno.test("find-if-path-exists-in-graph", () => {
    testValidPath(validPath2);
});
function testValidPath(validPath: {
    (
        n: number,
        edges: number[][],
        source: number,
        destination: number,
    ): boolean;
}) {
    assertEquals(true, validPath(1, [], 0, 0));
    assertEquals(
        false,
        validPath(
            6,
            [
                [0, 1],
                [0, 2],
                [3, 5],
                [5, 4],
                [4, 3],
            ],
            0,
            5,
        ),
    );
    assertEquals(
        true,
        validPath(
            3,
            [
                [0, 1],
                [1, 2],
                [2, 0],
            ],
            0,
            2,
        ),
    );
}
