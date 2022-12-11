export default function uniqueMorseRepresentations(words: string[]): number {
    const translations = words.map((word) =>
        Array.from(word)
            .map((v) => {
                const m = letterToMorse.get(v);

                if (typeof m === "undefined") {
                    throw Error("invalid word");
                }
                return m;
            })
            .join("")
    );

    const seen = new Set<string>(translations);
    return seen.size;
}
const MORSE = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
];
const letterToMorse = new Map(
    MORSE.map((v, i) => [String.fromCharCode(i + "a".charCodeAt(0)), v])
);
