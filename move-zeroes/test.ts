import { assertEquals } from "../deps.ts";
import { move_zeros } from "../mod.ts";
Deno.test("move_zeros", () => {
    const examples: {
        input: Parameters<typeof move_zeros>[0];
        output: Parameters<typeof move_zeros>[0];
    }[] = [
        {
            input: [0, 1, 0, 3, 12],
            output: [1, 3, 12, 0, 0],
        },
        { input: [0], output: [0] },
        { input: [999, 999, 99, 9], output: [999, 999, 99, 9] },
    ];
    examples.forEach(({ input, output }) => {
        move_zeros(input);
        assertEquals(output, input);
    });
});
