import { assert, assertStrictEquals } from "../deps.ts";
import { pow_bigint } from "../mod.ts";
import { float64equals } from "../utils/float64equals.ts";
import pow_x_n from "./index.ts";
Deno.test("pow_x-n", () => {
    const examples: {
        input: Parameters<typeof pow_x_n>;
        output: ReturnType<typeof pow_x_n>;
    }[] = [
        { input: [2.0, 10], output: 1024.0 },
        { input: [100, 100], output: 1e200 },
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
        assert(float64equals(output, pow_x_n(...input)));
    });
});
Deno.test("pow_bigint", () => {
    const examples: {
        input: Parameters<typeof pow_bigint>;
        output: ReturnType<typeof pow_bigint>;
    }[] = [
        { input: [BigInt(2), 10n], output: BigInt(1024.0) },
        {
            input: [100n, 100n],
            output:
                100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
        },

        {
            input: [2n, 6n],
            output: BigInt(64.0),
        },
        {
            input: [688n, 68n],
            output:
                9036781882805851290639597927040482406482157574559116099548211283603471044068107755100184208020371364454930798169267683149572972315418389823766231220691565768687216159600116784986771438012727296n,
        },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(output, pow_bigint(...input));
    });
});
