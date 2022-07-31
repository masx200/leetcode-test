import { assertEquals } from "../deps.ts";
import largestComponentSize from "./index.ts";

Deno.test("largest-component-size-by-common-factor", () => {
    const inputs = [
        [4, 6, 15, 35],
        [20, 50, 9, 63],
        [2, 3, 6, 7, 4, 12, 21, 39],
        [4, 6, 15, 35, 1998],
        [20, 50, 9, 63, 1998],
        [2, 3, 6, 7, 4, 12, 21, 39, 1998],
    ];
    const outputs = [4, 2, 8, 5, 5, 9];
    const cases = inputs.map((input, index) => [
        input,
        outputs[index],
    ]) as Array<[number[], number]>;

    for (const [input, output] of cases) {
        const result = largestComponentSize(input);
        assertEquals(result, output);
    }
});
