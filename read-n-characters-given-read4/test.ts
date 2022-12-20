import solution from "./index.ts";
import { assertEquals } from "asserts";
Deno.test("read-n-characters-given-read4", () => {
    const examples: Array<[string, number, number, string]> = [
        ["abc", 4, 3, "abc"],
        ["abcde", 5, 5, "abcde"],
        ["abcdABCD1234", 12, 12, "abcdABCD1234"],
        ["leetcode", 5, 5, "leetc"],
    ];

    for (const [file, n, count, content] of examples) {
        let index = 0;
        const read4 = (buf: string[]): number => {
            if (file.length - index > 4) {
                const total = 4;
                for (let i = 0; i < total; i++) {
                    buf[i] = file[i + index];
                }
                index += 4;

                return total;
            } else {
                const total = file.length - index;
                for (let i = 0; i < total; i++) {
                    buf[i] = file[i + index];
                }
                index = file.length;

                return total;
            }
        };
        const buf = Array<string>(n).fill("");
        const result = solution(read4)(buf, n);

        assertEquals(result, count);

        assertEquals(buf.slice(0, count).join(""), content);
    }
});
