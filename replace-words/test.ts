import { assertEquals } from "../deps.ts";
import replaceWords from "./index.ts";

Deno.test("replace-words", () => {
    const dictionary = ["cat", "bat", "rat"];
    const sentence = "the cattle was rattled by the battery";
    const result = replaceWords(dictionary, sentence);
    assertEquals(result, "the cat was rat by the bat");

    assertEquals(
        "a a b c",
        replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"),
    );
});
