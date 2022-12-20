import solution from "./index.ts";
import { assertEquals } from "asserts";
import { createFileReader4 } from "../read-n-characters-given-read4/createFileReader4.ts";
Deno.test("read-n-characters-given-read4", () => {
    const file = "abc";

    const read4 = createFileReader4(file);
    const read = solution(read4);
    const examples = [
        [1, 1, "a"],
        [2, 2, "bc"],
        [1, 0, ""],
    ] as Array<[number, number, string]>;
    for (const [n, count, content] of examples) {
        const buf = Array<string>(n).fill("");

        const result = read(buf, n);
        // console.log(result, buf);
        assertEquals(result, count);

        assertEquals(content, buf.slice(0, count).join(""));
    }
});
