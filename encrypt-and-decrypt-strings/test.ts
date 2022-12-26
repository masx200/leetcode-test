import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
import Encrypter from "./index.ts";

Deno.test("encrypt-and-decrypt-strings", () => {
    assertEquals(
        runScript(
            ["Encrypter", "encrypt", "decrypt"],
            [
                [
                    ["a", "b", "c", "d"],
                    ["ei", "zf", "ei", "am"],
                    [
                        "abcd",
                        "acbd",
                        "adbc",
                        "badc",
                        "dacb",
                        "cadb",
                        "cbda",
                        "abad",
                    ],
                ],
                ["abcd"],
                ["eizfeiam"],
            ],
            Encrypter,
        ),
        [null, "eizfeiam", 2],
    );
});

Deno.test("encrypt-and-decrypt-strings", () => {
    assertEquals(
        runScript(
            ["Encrypter", "encrypt", "decrypt"],
            [
                [["b"], ["ca"], ["aaa", "cacbc", "bbaba", "bb"]],
                ["bbb"],
                ["cacaca"],
            ],
            Encrypter,
        ),
        [null, "cacaca", 0],
    );
});
