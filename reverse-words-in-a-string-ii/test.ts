import { assertEquals } from "asserts";
import reverseWords from "./index.ts";
Deno.test("reverse-words-in-a-string-ii", () => {
    const s = [
        "t",
        "h",
        "e",
        " ",
        "s",
        "k",
        "y",
        " ",
        "i",
        "s",
        " ",
        "b",
        "l",
        "u",
        "e",
    ];
    reverseWords(s);
    assertEquals(s, [
        "b",
        "l",
        "u",
        "e",
        " ",
        "i",
        "s",
        " ",
        "s",
        "k",
        "y",
        " ",
        "t",
        "h",
        "e",
    ]);
});
