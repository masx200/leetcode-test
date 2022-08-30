import { assertEquals } from "../deps.ts";
import lengthLongestPath from "./index.ts";

Deno.test("longest-absolute-file-path", () => {
    const inputs = [
        "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext",
        "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext",
        "a",
        "a\n\tb\n\t\tc.txt\n\taaaa.txt",
    ];
    const outputs = [20, 32, 0, 10];
    const examples: {
        input: string;
        output: number;
    }[] = inputs.map((v, i) => ({ input: v, output: outputs[i] }));
    examples.forEach(({ input, output }) => {
        assertEquals(output, lengthLongestPath(input));
    });
});
