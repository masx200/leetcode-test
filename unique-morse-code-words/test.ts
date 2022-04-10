import { assertStrictEquals } from "../deps.ts";
import { unique_morse_code_words } from "../mod.ts";

Deno.test("unique-morse-code-words", () => {
    const examples: {
        input: Parameters<typeof unique_morse_code_words>[0];
        output: ReturnType<typeof unique_morse_code_words>;
    }[] = [
        { input: ["gin", "zen", "gig", "msg"], output: 2 },
        { input: ["a"], output: 1 },
        {
            input: [
                "saenc",
                "saenca",
                "saencb",
                "saencc",
                "saencd",
                "saence",
                "saencf",
                "saencg",
                "saench",
                "saenci",
                "effnronmwnj",
                "effnronmwnk",
                "effnronmwnl",
                "effnronmwnm",
                "effnronmwnn",
                "effnronmwno",
                "effnronmwnp",
                "effnronmwnq",
                "effnronmwnr",
                "effnronmwns",
            ],
            output: 20,
        },
        {
            input: [
                "saenc",
                "saenc",
                "saenc",
                "saenc",
                "saenc",
                "saenc",
                "saenc",
                "saenc",
                "saenc",
                "saenc",
                "effnronmwn",
                "effnronmwn",
                "effnronmwn",
                "effnronmwn",
                "effnronmwn",
                "effnronmwn",
                "effnronmwn",
                "effnronmwn",
                "effnronmwn",
                "effnronmwn",
            ],
            output: 2,
        },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(unique_morse_code_words(input), output);
    });
});
