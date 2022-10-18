import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";
import { ArrayReader } from "./ArrayReader.ts";
import search from "./index.ts";
Deno.test("search-in-a-sorted-array-of-unknown-size", () => {
    const cases: Array<[number[], number, number]> = [
        [[-1, 0, 3, 5, 9, 12], 9, 4],
        [[-1, 0, 3, 5, 9, 12], 2, -1],
        [[-1, 0, 3, 5, 9, 12, 100], 20, -1],
        [[-1, 0, 3, 5, 9, 12, 100], 200, -1],
    ];
    for (const [a, b, c] of cases) {
        assertEquals(c, search(new ArrayReader(a), b));
    }
});
