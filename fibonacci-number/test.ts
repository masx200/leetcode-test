import { assertStrictEquals } from "../deps.ts";
import { fibonacciNumber } from "../mod.ts";

Deno.test("fibonacci-number", () => {
    const examples: {
        input: number;
        output: ReturnType<typeof fibonacciNumber>;
    }[] = [
        { input: 2, output: 1 },
        { input: 3, output: 2 },
        { input: 4, output: 3 },
        { input: 30, output: 832040 },
        { input: 20, output: 6765 },
        { input: 99, output: 218922995834555169026n },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(fibonacciNumber(input), output);
    });
});
