import { assertStrictEquals } from "../deps.ts";
import { que_shi_de_shu_zi_lcof } from "../mod.ts";

Deno.test("que-shi-de-shu-zi-lcof", () => {
    const examples: {
        input: Parameters<typeof que_shi_de_shu_zi_lcof>[0];
        output: ReturnType<typeof que_shi_de_shu_zi_lcof>;
    }[] = [
        { input: [0, 1, 3], output: 2 },
        { input: [0, 1, 2, 3, 4, 5, 6, 7, 9], output: 8 },
        { input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], output: 10 },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(output, que_shi_de_shu_zi_lcof(input));
    });
});
