import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";
import jobScheduling from "./index.ts";
Deno.test("maximum-profit-in-job-scheduling", () => {
    const cases = [
        [
            [1, 2, 3, 3],
            [3, 4, 5, 6],
            [50, 10, 40, 70],
        ],
        [
            [1, 2, 3, 4, 6],
            [3, 5, 10, 6, 9],
            [20, 20, 100, 70, 60],
        ],
        [
            [1, 1, 1],
            [2, 3, 4],
            [5, 6, 4],
        ],
    ];
    const outputs = [120, 150, 6];
    assertEquals(
        cases.map(([s, e, p]) => jobScheduling(s, e, p)),
        outputs,
    );
});
