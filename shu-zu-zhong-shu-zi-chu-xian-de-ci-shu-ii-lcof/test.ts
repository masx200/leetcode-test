import { assertEquals } from "../deps.ts";
import singleNumber from "./index.ts";

Deno.test("shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof", () => {
    const data = [
        {
            input: [3, 4, 3, 3],
            output: 4,
        },
        {
            input: [9, 1, 7, 9, 7, 9, 7],
            output: 1,
        },
    ];

    for (let i = 0; i < data.length; i++) {
        const temp = data[i];
        const output = temp.output;
        const input = temp.input;
        const res = singleNumber(input);
        assertEquals(res, output);
    }
});
