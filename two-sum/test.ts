import { assertEquals } from "../deps.ts";
import two_Sum from "./index.ts";

Deno.test("two-sum", () => {
    const examples: {
        input: Parameters<typeof two_Sum>;
        output: ReturnType<typeof two_Sum>;
    }[] = [
        { input: [[3, 3], 6], output: [0, 1] },
        { input: [[2, 7, 11, 15], 9], output: [0, 1] },
        { input: [[3, 2, 4], 6], output: [1, 2] },
        {
            input: [
                [
                    0,
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
                    21,
                    22,
                    23,
                    24,
                ],
                30,
            ],
            output: [14, 16],
        },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(new Set(two_Sum(...input)), new Set(output));
    });
});
