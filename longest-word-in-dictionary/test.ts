import { assertEquals } from "../deps.ts";
import longestWord from "./index.ts";

Deno.test("longest-word-in-dictionary", () => {
    const inputs = [
        ["w", "wo", "wor", "worl", "world"],
        ["a", "banana", "app", "appl", "ap", "apply", "apple"],
    ];
    const outputs = ["world", "apple"];
    const examples: {
        input: string[];
        output: string;
    }[] = inputs.map((v, i) => ({ input: v, output: outputs[i] }));
    examples.forEach(({ input, output }) => {
        assertEquals(output, longestWord(input));
    });
});
