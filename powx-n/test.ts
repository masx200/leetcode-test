import { assertAlmostEquals } from "../deps.ts";
import { pow_x_n } from "../mod.ts";

Deno.test("powx-n", () => {
    const examples: {
        input: Parameters<typeof pow_x_n>;
        output: ReturnType<typeof pow_x_n>;
    }[] = [
        { input: [2.0, 10], output: 1024.0 },
        { input: [2.1, 3], output: 9.261 },
        { input: [2.0, -2], output: 0.25 },
        {
            input: [2, 6],
            output: 64.0,
        },
        { input: [2, -99999], output: 0.0 },
        { input: [2, 99999], output: Infinity },
        { input: [6553688888888, 6553688888888], output: Infinity },
        { input: [6553688888888, -6553688888888], output: 0.0 },
        { input: [1 / 6553688888888, 6553688888888], output: 0.0 },
        { input: [1 / 6553688888888, -6553688888888], output: Infinity },
        { input: [-6553688888888, -6553688888888], output: 0.0 },
        { input: [-6553688888888, 6553688888888], output: Infinity },
        { input: [Infinity, 2], output: Infinity },
        { input: [Infinity, -2], output: 0 },
        { input: [Infinity, 0], output: 1 },
        { input: [-Infinity, 0], output: 1 },
        { input: [-Infinity, 3], output: -Infinity },
        { input: [-Infinity, 30], output: Infinity },
        { input: [-Infinity, -30], output: 0 },

        { input: [0, Infinity], output: 0 },
        { input: [10, Infinity], output: Infinity },
        { input: [-10, Infinity], output: Infinity },
        { input: [-10, -Infinity], output: 0 },
        { input: [10, -Infinity], output: 0 },
        { input: [0, -Infinity], output: Infinity },
    ];
    examples.forEach(({ input, output }) => {
        assertAlmostEquals(output, pow_x_n(...input));
    });
});
