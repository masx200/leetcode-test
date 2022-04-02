import { assertStrictEquals } from "../deps.ts";
import { fei_bo_na_qi_shu_lie_lcof } from "../mod.ts";

Deno.test("fei-bo-na-qi-shu-lie-lcof", () => {
    const examples: { input: number; output: number }[] = [
        { input: 80, output: 184550589 },
        { input: 1, output: 1 },
        { input: 0, output: 0 },
        { input: 60, output: 8745084 },
        { input: 20, output: 6765 },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(fei_bo_na_qi_shu_lie_lcof(input), output);
    });
});
