import { assertStrictEquals } from "../deps.ts";
import { fibonacci_bigint } from "../mod.ts";
import fibonacci_Number from "./index.ts";
Deno.test("fibonacci-number", () => {
    const examples: {
        input: number;
        output: ReturnType<typeof fibonacci_Number>;
    }[] = [
        { input: 2, output: 1 },
        { input: 3, output: 2 },
        { input: 4, output: 3 },
        { input: 30, output: 832040 },
        { input: 20, output: 6765 },
        { input: 99, output: 218922995834555169026n },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(fibonacci_Number(input), output);
    });
});
Deno.test("fibonacci_bigint", () => {
    const examples: {
        input: Parameters<typeof fibonacci_bigint>[0];
        output: ReturnType<typeof fibonacci_bigint>;
    }[] = [
        { input: 2n, output: 1n },
        { input: 3n, output: 2n },
        { input: 4n, output: 3n },
        { input: 30n, output: 832040n },
        { input: 20n, output: 6765n },
        { input: 21n, output: 10946n },
        { input: 22n, output: 6765n + 10946n },
        { input: 99n, output: 218922995834555169026n },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(fibonacci_bigint(input), output);
    });
});
