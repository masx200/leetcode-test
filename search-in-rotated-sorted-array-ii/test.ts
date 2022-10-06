import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import search from "./index.ts";

Deno.test("search-in-rotated-sorted-array-ii", () => {
    const inputs = [
        [[2, 5, 6, 0, 0, 1, 2], 0],
        [[2, 5, 6, 0, 0, 1, 2], 3],
        [[3, 1, 2, 3, 3, 3, 3], 2],
    ] as Array<[nums: number[], target: number]>;
    const outputs = [true, false, true];
    assertEquals(
        outputs,
        inputs.map(([nums, target]) => search(nums, target)),
    );
});
