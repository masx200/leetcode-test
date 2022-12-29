import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";
import ExamRoom from "./index.ts";
Deno.test("exam-room", () => {
    assertEquals(
        runScript(
            ["ExamRoom", "seat", "seat", "seat", "seat", "leave", "seat"],
            [[10], [], [], [], [], [4], []],
            ExamRoom,
        ),
        [null, 0, 9, 4, 2, null, 5],
    );
});
Deno.test("exam-room", () => {
    assertEquals(
        runScript(
            [
                "ExamRoom",
                "seat",
                "seat",
                "seat",
                "leave",
                "leave",
                "seat",
                "seat",
                "seat",
                "seat",
                "seat",
                "seat",
                "seat",
                "seat",
                "seat",
                "leave",
            ],
            [
                [10],
                [],
                [],
                [],
                [0],
                [4],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [0],
            ],
            ExamRoom,
        ),
        [null, 0, 9, 4, null, null, 0, 4, 2, 6, 1, 3, 5, 7, 8, null],
    );
});
